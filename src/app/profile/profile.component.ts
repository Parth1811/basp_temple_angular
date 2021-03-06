import { AdminApiService } from 'app/admin-api.service';
import { CustomAdapter } from './../special-dates/specialevent';
import { UserHandler } from './user-handler';
import { APIService, CreateUserInput, Gender, GetUserQuery, ModelUserFilterInput, ModelIDInput, ListTranscationsQuery, ModelTranscationFilterInput } from './../API.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Auth, Hub, Storage } from 'aws-amplify';
import { NgbCalendar, NgbDate, NgbDateAdapter, NgbInputDatepickerConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UploadHandle } from 'app/special-dates/upload-handle';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    providers: [
        { provide: NgbDateAdapter, useClass: CustomAdapter },
        NgbInputDatepickerConfig
    ],
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    user: UserHandler;
    userhandler = UserHandler;
    hasProfilePhoto = false;
    prefix_path = "profile-images/";
    uploadDialog = new UploadHandle;
    transcations = [];
    public genderTypes = Object.values(Gender);
    today = {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth() - 1,
        day: (new Date()).getDate()
    }

    constructor(
        private api: APIService,
        private modalService: NgbModal,
        private adminapi: AdminApiService) {}

    ngOnInit() {
        Auth.currentAuthenticatedUser()
            .then(async user => {
                await this.loadUserDetails(user);
                await this.listAllTransactions();
                console.log(this.transcations)
            })
            .catch((error) => console.log(error));
    }

    signout(){
        Auth.signOut();
    }

    open(content) {
        this.modalService.open(content);
    }

    async updateUserDetails(userDetailsForm){
        this.api.UpdateUser(this.user.getUpdateUserInput());
        this.modalService.dismissAll();
    }

    async loadUserDetails(user){
        let quser: ModelUserFilterInput = {
            username: {
                eq: user.username
            },
        }
        await this.api.ListUsers(quser)
            .then(event =>{
                if (event.items.length > 0) {
                    this.user = new UserHandler(event.items[0])
                }

                if (this.user.profile_photo != '') {
                    this.uploadDialog.upload_file_path.next(this.user.profile_photo);
                    this.hasProfilePhoto = true;
                }

                let groupArray = user.signInUserSession.accessToken.payload["cognito:groups"];
                let isAdmin = false;
                if (groupArray && groupArray.find(elem => elem == "Admins")) isAdmin = true;
                if (this.user.isAdmin !== isAdmin) {
                    this.api.UpdateUser({
                        id: this.user.id,
                        isAdmin: isAdmin
                    })
                }

            })
            .catch(error => {
                console.log(error)
            })
    }

    async uploadImage(event) {
        console.log("Uploading....")
        const file = event.target.files[0];
        const upload_path = this.prefix_path + file.name;
        this.uploadDialog.showProgress = true;
        try {
            let result = await Storage.put(upload_path, file, {
                contentType: 'image/png', // contentType is optional
                track: true,
            });
            this.uploadDialog.upload_file_path.next(upload_path);
            this.user.profile_photo = upload_path
            this.hasProfilePhoto = true;
        } catch (error) {
            console.log('Error uploading file: ', error);
        }
        this.uploadDialog.uploaded = true
        this.uploadDialog.showProgress = false;
        this.uploadDialog.uploadAnother = false;
    }

    listAllTransactions(){
        let a: ModelTranscationFilterInput
        this.api.ListTranscations({
            paidById: {
                eq: this.user.id
            }
        }).then(data => {
            console.log(data)
            this.transcations = data.items} )
        .catch(error => console.log(error))
    }
}
