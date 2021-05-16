import { UserHandler } from './../profile/user-handler';
import { APIService, CreateTranscationInput } from './../API.service';
import { AdminApiService } from 'app/admin-api.service';
import { Component, Input, OnInit } from '@angular/core';
import { CreateUserInput } from 'app/API.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  @Input() user: UserHandler;
  createUserResponse: any;

  constructor(private api: APIService, private adminapi: AdminApiService) { }

  ngOnInit(): void {
  }

  testFunc(){
    console.log(this.user);
  }


  createTranscation(){
    let tx : CreateTranscationInput = {
      paidById: "183cd06c-a9e2-48be-bfd1-9076181123be",
      createdById: this.user.id,
      amount: 201,
      tx_type: "Cash",
      tx_id: "vjdsnj213123"
    }

    this.api.CreateTranscation(tx)
      .then(data => console.log(data))
      .catch(error => console.log(error))
  }

  createUSer(form) {
    this.adminapi.createUser(form.value.email)
      .then(data => {
        if (!data.error) {
          let newuser: CreateUserInput = {
            username: data.user.Username,
            email: form.value.email,
            isAdmin: false
          }
          this.api.CreateUser(newuser)
            .then(() => console.log("New user created"))
            .catch(error => { console.log(error) })
        }
        this.createUserResponse = data.message;
      })
      .catch(error => { console.log(error) })
  }


}
