import { ESTATUS } from "./status.enum";

export class Contact{
    name = '';
    surname = '';
    email = '';
    status = ESTATUS.false;

    constructor(name,surname,email,status){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.status = status;
    }
}