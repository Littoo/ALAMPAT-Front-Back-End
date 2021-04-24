import { Injectable } from '@angular/core';
import axios from 'axios'
import { User } from '../models/User'
import { Router, ActivatedRoute } from '@angular/router';

const localAPI = 'http://localhost:3000'


interface getUserResponse {
    message: string;
    userData: User;
    success: boolean;
}

@Injectable({
    providedIn: 'root',
})

//Not usable for now 
export class AccountService {
    getUserError: string = '';
    userID: string = '607fe491958fa65f08f14d0e';
    user = new User();
    constructor(private router:Router,) { }

    getUserdata=()=>{
        try {
            axios.get(`${localAPI}/users/profile/` + this.userID)
            .then(resp => {
                this.user = resp.data.userData
                
                console.log(this.user);
                return resp.data
            })
            .catch(err => {
                // Handle Error Here
                
                console.error(err);
                return err
            });;
            /*const response = await axios.get(`${localAPI}/users/profile/` + this.userID);
            const { message, userData, success } = response.data
            if (success) {
                console.log(message, userData)
                this.user = userData 
                console.log(this.user)
                return  this.user; 
                //
            } else {
                console.log(message, userData)
                return this.user
            }*/

        } catch (error) {
            
            console.log(error)
            this.getUserError = error

            return error
        }
    }

    
}