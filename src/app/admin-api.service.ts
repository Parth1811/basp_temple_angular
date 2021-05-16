import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { API, Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {

  apiName = 'AdminQueries';
  listUserToken: string = "";

  async addUserToGroup(username: string, group: string){
    let path = '/addUserToGroup';
    let myInit = {
      body: {
        "username": username,
        "groupname": group
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    return await API.post(this.apiName, path, myInit);
  }

  async listUsers(limit) {
    let path = '/listUsers';
    let myInit = {
      queryStringParameters: {
        "limit": limit,
        "token": this.listUserToken,
      },
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    const { NextToken, ...rest } = await API.get(this.apiName, path, myInit);
    this.listUserToken = NextToken;
    return rest;
  }

  async createUser(email: string) {
    let path = '/createUser';
    let myInit = {
      body: {
        "email": email,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    let res;
    await API.post(this.apiName, path, myInit)
      .then(data => res = { ...data, "error": false })
      .catch(error => res = {...error.response.data, "error": true})

    return res;
  }

}
