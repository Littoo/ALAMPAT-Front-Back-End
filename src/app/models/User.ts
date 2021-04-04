export interface User {
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    password: string;
    userType: UserType;
}

export enum UserType {
    BUYER = 'buyer',
    SELLER = 'seller',
}