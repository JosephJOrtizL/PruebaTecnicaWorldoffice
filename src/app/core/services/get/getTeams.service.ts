import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { getDate, setTeamsDTO } from '../../models/setTeamsDTO';
import { TeamsObservable } from '../../observables/teams.observable';
import { AlertObservable } from '../../observables/alert.observable';
@Injectable({
  providedIn: 'root',
})
export class GetTeamsService {

  constructor(
    private http: HttpClient,
    private $teams:TeamsObservable,
    private $alert:AlertObservable
  ) {}
  private setDefaultValues():void{
    this.$teams.set({
      teams:[],
      team:{
        id:-1
      },
      isArray:true,
      isLoading:true})
  }
  public getTeams(): void {
    this.setDefaultValues();
    setTimeout(() => {
      this.http
          .get(environment.serverUrl + 'equipos/listar/0/1000',
          {},
          )
        .subscribe(
          (res: any) => {
            this.$teams.set({teams:setTeamsDTO(res?.content), isArray:true ,isLoading:false})
          },
          (error) => {
          }
        );
    }, 0);
  }
  public getTeamDetail(id:string): void {
    this.setDefaultValues();
    if(id !== '-1'){
      setTimeout(() => {
        this.http
            .get(environment.serverUrl +  `equipos/consultar/${id}`,
            {},
            )
          .subscribe(
            (res: any) => {
              this.$teams.set({team:{
                name: res?.nombre??'',
                nationality: res?.nacionalidad??'',
                value: res?.valor??0,
                webSite: res?.sitioWeb??'',
                trainer: res?.entrenador??'',
                stadium:res?.entrenador??'',
                founded: getDate(res?.fundacion)??'',
                capacity: res?.capacidad??0,
                id:res?.id
              },
              isArray: false,
              isLoading:false})
            },
            (error) => {
              this.$teams.set({
                teams:[],
                team:{},
                isArray:false,
                isLoading:false})
            }
          );
      }, 0);
    }else{
      this.$alert.set({alert:"error",custommsg:'Algo salio mal, por favor intente de nuevo',closingAftter:5000, isloading:false});
    }
  }
  public getTeamByDate(start:string, end:string): void {
    this.setDefaultValues();
      setTimeout(() => {
        this.http
            // .get(`https://wo-fifa.azurewebsites.net/equipos/consultar/01-01-1800/25-07-2019/`,
            .get(environment.serverUrl +  `equipos/consultar/${start}/${end}`,
            {},
            )
          .subscribe(
            (res: any) => {
              this.$teams.set({teams:setTeamsDTO(res), isArray:true ,isLoading:false})
            },
            (error) => {
            }
          );
      }, 0);
  }
}
