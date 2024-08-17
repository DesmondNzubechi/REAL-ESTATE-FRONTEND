import { IconType } from "react-icons"


export interface navType {
    name: String
    url: String | any
}

export interface ourServiceType {
    image: HTMLImageElement | any
    title: string
    descrip: string
    link : string
}

export interface propertyOverview {
   name: string
    location: string
    bedroom: string
    bathroom: string
    car: string
    imageNo: string
    images: HTMLImageElement | any
    video: string
    price: string
    status: string
}

export interface accountNav {
    name: string
    url: string
    icon : IconType
}

export interface loginDetail {
    email: string
    password : string
}

export interface userType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    images: string;
    phoneNumber: number;
    emailVerified: boolean;
    role: string;
    country: string;
    state: string;
  }