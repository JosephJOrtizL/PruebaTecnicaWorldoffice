import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertObservable } from '../../observables/alert.observable';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class PostLoginService {

  constructor(
    private http: HttpClient,
    private $alert:AlertObservable,
    private router:Router
  ) {}

  public postLogin(params:PostLoginInterface): void {
    this.$alert.set({alert:null,isloading:true});
    setTimeout(() => {
      this.http
          .post(environment.serverUrl + 'login',
              {
          mimeType: 'application/json',
          text: '',
        })
        .subscribe(
          (res: any) => {
            localStorage.setItem('isLogged','true')
          },
          (error) => {
            if(error.statusText === 'OK'){
              localStorage.setItem('isLogged','true')
              this.$alert.set({alert:"custom-success",custommsg:'Login Exitoso',closingAftter:5000, isloading:false});
              this.router.navigate(['/equipos']);
            }else{
              this.$alert.set({alert:"error",custommsg:'Algo salio mal, por favor intente de nuevo',closingAftter:5000, isloading:false});
              localStorage.setItem('isLogged','false')
            }
          }
        );
    }, 0);
  }
  public postLogout(): void {
    setTimeout(() => {
      this.http
          .post(environment.serverUrl + 'logout',
              {
          mimeType: 'application/json',
          text: '',
        })
        .subscribe(
          (res: any) => {
            localStorage.setItem('isLogged','false')
            this.$alert.set({alert:"custom-success",custommsg:'Logout Exitoso',closingAftter:5000, isloading:false});
            this.router.navigate(['/login'])
          },
          (error) => {
            if(error.statusText === 'OK'){
              localStorage.setItem('isLogged','false')
              this.$alert.set({alert:"custom-success",custommsg:'Logout Exitoso',closingAftter:5000, isloading:false});
              this.router.navigate(['/login']);
            }else{
              this.$alert.set({alert:"error",custommsg:'Algo salio mal, por favor intente de nuevo',closingAftter:5000, isloading:false});
            }
          }
        );
    }, 0);
  }

}
export interface PostLoginInterface {
  email: string;
  password: string;
}
