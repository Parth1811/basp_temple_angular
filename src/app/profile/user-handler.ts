import { Gender, UpdateUserInput } from './../API.service';

export interface User{
    id?: string
    username?: string
    first_name?: string
    last_name?: string
    email?: string
    phone_number?: string
    profile_photo?: string
    address?: string
    birthdate?: string
    gender?: Gender
    isAdmin?: boolean
}

export class UserHandler {
    id: string
    username: string
    first_name: string
    last_name: string
    email: string
    phone_number: string
    profile_photo: string
    address: string
    birthdate: string
    gender: Gender
    isAdmin: boolean
    static attrnames = {
        username: "User Name",
        first_name: "First Name",
        last_name: "Last Name",
        email: "Email",
        phone_number: "Phone Number",
        address: "Address",
        birthdate: "Birth Date",
        gender: "Gender"
    }

    constructor(user?: User){
        this.id = user && user.id || ""
        this.username = user && user.username || ""
        this.first_name = user && user.first_name || ""
        this.last_name = user && user.last_name || ""
        this.email = user && user.email || ""
        this.phone_number = user && user.phone_number || ""
        this.profile_photo = user && user.profile_photo || ""
        this.address = user && user.address || ""
        this.birthdate = user && user.birthdate || ""
        this.gender = user && Gender[user.gender] || Gender.OTHER
        this.isAdmin = user && user.isAdmin || false
    }

    generateHTMLTable(){
        let html = "";
        Object.keys(UserHandler.attrnames).forEach(elem => {
            html += '<tr><th scope="row" >' + UserHandler.attrnames[elem] + '</th><td><h5>' + this[elem] +'</h5></td></tr>'
        });
        return html
    }

    getUpdateUserInput(): UpdateUserInput{
        return {
            id: this.id,
            username: this.username,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone_number: this.phone_number,
            profile_photo: this.profile_photo,
            address: this.address,
            birthdate: this.birthdate,
            gender: this.gender,
            isAdmin: this.isAdmin
        }
    }

}
