import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Auth, Hub } from 'aws-amplify';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: NgbDateStruct;
  date: {year: number, month: number};
  state = { user: null, customState: null };

  constructor(private calendar: NgbCalendar) { }

  ngOnInit(): void {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
          this.state.user = data;
          break;
        case "signOut":
          this.state.user = null ;
          break;
        case "customOAuthState":
          this.state.customState = data ;
      }})

    Auth.currentAuthenticatedUser()
      .then(user => this.state.user = user )
      .catch(() => console.log("Not signed in"));
  }


  signin(){
      Auth.federatedSignIn();
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
