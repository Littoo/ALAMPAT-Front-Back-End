import { Injectable } from '@angular/core';
import axios from 'axios'
import { User } from '../models/User'
import { Router, ActivatedRoute } from '@angular/router';

const localAPI = 'http://localhost:3000'


interface getUserResponse {
    message: string;
    userData: any;
    success: boolean;
}

@Injectable({
    providedIn: 'root',
})


export class AccountService {
    getUserError: string = '';
    userID: string = '607fe491958fa65f08f14d0e';

    constructor(private router:Router) { }

    getUserdata = async () => {
        try {
            const response = await axios.get<getUserResponse>(`${localAPI}/users/profile/` + this.userID);
            const { message, userData, success } = response.data
            if (success) {
                console.log(message, userData)
                return  userData
                //
            } else {
                console.log(message, userData)
                return success
            }

        } catch (error) {
            
            console.log(error)
            this.getUserError = error
            return false
        }
    }

    
}