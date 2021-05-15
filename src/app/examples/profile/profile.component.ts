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
        Auth.currentAuthenticatedUser()
            .then(user => {
                this.state.user = user
            })
            .catch(() => console.log("Not signed in"));
    }

    signout(){
        Auth.signOut();
    }
}
