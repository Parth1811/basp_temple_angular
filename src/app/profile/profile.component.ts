import { APIService, CreateUserInput, Gender, GetUserQuery, ModelUserFilterInput, ModelIDInput } from './../API.service';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    state = { user: null, customState: null };

    constructor(private api: APIService) { }

    ngOnInit() {
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.state.user = user
            })
            .catch(() => console.log("Not signed in"));
    }

    signout(){
        Auth.signOut();
    }

    testFunction(){
        let user: CreateUserInput = {
            username: this.state.user.username,
            first_name: "Parth",
            email: this.state.user.attributes.email,
            last_name: "Patil",
            phone_number: "+91 9920385585",
            profile_photo: "",
            address: "",
            birthdate: "SUn 18 Oct 1998",
            gender: Gender.MALE,
            isAdmin: true
        }

        // let userid:  = 
        let quser: ModelUserFilterInput = {
            username: {
                eq: this.state.user.username
            },
        }
        this.api.ListUsers(quser)
        // this.api.CreateUser(user)
            .then(event =>{
                console.log(event)
            })
            .catch(error => {
                console.log(error)
            })
    }
}
