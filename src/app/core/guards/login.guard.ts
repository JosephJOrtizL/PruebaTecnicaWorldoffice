import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate():boolean {
        const log = localStorage.getItem('isLogged');
        let isLogged = log && log !=undefined ? 
        JSON.parse(log) == true ? true:false 
        : false
        if (isLogged) {
            this.router.navigate(['/equipos']);
            return false;
        }else{
            return true;
        }
    }
}