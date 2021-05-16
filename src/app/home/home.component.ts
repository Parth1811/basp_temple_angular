import { CreateFestivalEventInput, FestivalEvent, CreateUserInput } from './../API.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Auth, Hub, Storage } from 'aws-amplify';
import { APIService } from '../API.service';
import { AdminApiService } from 'app/admin-api.service';
import { SHA3 } from 'crypto.js';
import { first } from 'rxjs-compat/operator/first';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  state = { user: null, customState: null };
  url = "https://templemanagement.auth.ap-south-1.amazoncognito.com/login?response_type=code&client_id=55uv5dkvc6072jhia9o6d37oen&redirect_uri=http://localhost:4200/"

  constructor(private api: APIService, private adminapi: AdminApiService,private router: Router) { }

  ngOnInit(): void {

    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user)
        this.state.user = user
      })
      .catch(() => {
        this.state.user = null
        console.log("Not signed in")
      });

  }


  signin(){
    Auth.federatedSignIn();
    // window.location.assign(this.url);
  }

  signout() {
    Auth.signOut();
  }

  testFunction(){
    this.adminapi.createUser("parth4iitb@gmail.com")
      .then(data => {
        let newuser: CreateUserInput = {
          username: data.user.Username,
          email: "anisharoy203@gmail.com",
          isAdmin: false
        }
        this.api.CreateUser(newuser)
          .then(() => "New user created")
          .catch(error => { console.log(error) })
      })
      .catch(error =>{console.log(error)})
  }

}
