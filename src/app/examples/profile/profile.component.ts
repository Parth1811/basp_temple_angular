import { Component, OnInit } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

    state = { user: null, customState: null };

    constructor() { }

    ngOnInit() {
        Hub.listen("auth", ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    this.state.user = data;
                    console.log(this.state);
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

    signout(){
        Auth.signOut();
    }
}
