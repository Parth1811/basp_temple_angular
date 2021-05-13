import { SpecialEvent } from './specialevent';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Auth, Hub } from 'aws-amplify';
import { APIService } from '../API.service';

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

  constructor(private api: APIService, private router: Router) { }

  ngOnInit(): void {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.state.user = data;
          console.log(this.state);
          this.router.navigate(["/profile"])
          break;
        case "signOut":
          this.state.user = null;
          break;
        case "customOAuthState":
          this.state.customState = data;
      }
    })

    Auth.currentAuthenticatedUser()
      .then(user => {
        console.log(user)
        this.state.user = user
      })
      .catch(() => console.log("Not signed in"));

  }


  signin(){
    Auth.federatedSignIn();
    // window.location.assign(this.url);
  }

  signout() {
    Auth.signOut();
  }

  testFunction(){
    let ev: SpecialEvent = {
      id: "1",
      title: "Test",
      date: "Wed May 12, 2020",
      img_link: "assets/img/uriel-soberanes.jpg",
      description:"This is a test event"
    }

    this.api.CreateEvent(ev).then(event => {
      console.log('item created!');
    })
      .catch(e => {
        console.log('error creating specialEvent...', e);
      });
  }

}
