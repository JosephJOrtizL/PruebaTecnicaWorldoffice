import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AlertObservable } from '../../observables/alert.observable';
import { Router } from '@angular/router';
import { TeamsInterface } from '../../observables/teams.observable';
@Injectable({
  providedIn: 'root',
})
export class PostAddTeamService {

  constructor(
    private http: HttpClient,
    private $alert:AlertObservable,
    private router:Router
  ) {}
  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }
  public postAddTeam(props:TeamsInterface): void {
    this.$alert.set({alert:null,isloading:true});
    let body = {
        'nombre': props.name,
        'estadio': props.stadium,
        'sitioWeb': props.webSite,
        'nacionalidad':props.nationality,
        'fundacion': this.formatDate(new Date(props.founded!)),
        'entrenador': props.trainer,
        'capacidad': props.capacity,
        'valor': props.value
    }
    console.log('el boyd ', body);
    setTimeout(() => {
      this.http
          .post(environment.serverUrl + 'equipos/crear',
          body
        )
        .subscribe(
          (res: any) => {
            this.$alert.set({alert:"custom-success",custommsg:'Equipo Creado Exitosamente',closingAftter:5000, isloading:false});
            setTimeout(() => {
                this.router.navigate(['/equipos'])
            }, 2000);
          },
          (error) => {
            this.$alert.set({alert:"error",custommsg:'Algo salio mal, por favor intente de nuevo',closingAftter:5000, isloading:false});
          }
        );
    }, 1000);
  }
  public postUpdateTeam(props:TeamsInterface): void {
    this.$alert.set({alert:null,isloading:true});
    let body = {
        'nombre': props.name,
        'estadio': props.stadium,
        'sitioWeb': props.webSite,
        'nacionalidad':props.nationality,
        'fundacion': this.formatDate(new Date(props.founded!)),
        'entrenador': props.trainer,
        'capacidad': props.capacity,
        'valor': props.value
    }
    console.log('el boyd ', body);
    setTimeout(() => {
      this.http
          .put(environment.serverUrl + `equipos/actualizar/${props.id}`,
          body
        )
        .subscribe(
          (res: any) => {
            setTimeout(() => {
              this.$alert.set({alert:"custom-success",custommsg:'Equipo Actualizado Exitosamente',closingAftter:5000, isloading:false});
                this.router.navigate(['/equipos'])
            }, 2000);
          },
          (error) => {
            this.$alert.set({alert:"error",custommsg:'Algo salio mal, por favor intente de nuevo',closingAftter:5000, isloading:false});
          }
        );
    }, 1000);
  }

}
