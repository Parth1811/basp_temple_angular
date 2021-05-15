import { CreateFestivalEventInput, FestivalEvent } from './../API.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { Auth, Hub, Storage } from 'aws-amplify';
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
    Storage.put('/home/parth/hello/test.py', 'public Content', {
      level: 'public',
      contentType: 'text/plain'
    })
    .then ( (result) => {
      console.log(result);
    })
    .catch( (err) => {
      console.log(err);
    });
  }

}
