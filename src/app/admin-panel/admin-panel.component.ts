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
  createTXResponse: any;

  constructor(private api: APIService, private adminapi: AdminApiService) { }

  ngOnInit(): void {
  }

  createTranscation(form){
    this.api.ListUsers({
      email:{
        eq: form.value.email
      }
    }).then(async data => {
      if(data.items.length === 1){
        await this.api.CreateTranscation({
          paidById:data.items[0].id,
          createdById: this.user.id,
          amount: form.value.amount,
          tx_type: form.value.tx_type,
          tx_id: form.value.tx_id
        })
        this.createTXResponse = "Transaction Created Sucessfully"
      } else{
        this.createTXResponse = "No Such user Exists"
      }
    })
      .catch(error => this.createTXResponse = "No Such user Exists")
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
