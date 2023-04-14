import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { setTeamsDTO } from '../../models/setTeamsDTO';
import { TeamsObservable } from '../../observables/teams.observable';
import { GetTeamsService } from '../get/getTeams.service';
import { AlertObservable } from '../../observables/alert.observable';
@Injectable({
  providedIn: 'root',
})
export class DeleteTeamsService {

  constructor(
    private http: HttpClient,
    private getTeamService:GetTeamsService,
    private $alert:AlertObservable,
  ) {}

  public deleteTeam(id:string): void {
    this.$alert.set({alert:null,isloading:true});
    setTimeout(() => {
      this.http
          .delete(environment.serverUrl + `/equipos/eliminar/${id}`,
          {},
          )
        .subscribe(
          (res: any) => {
            this.$alert.set({alert:"custom-success",custommsg:'Equipo Eliminado Exitosamente',closingAftter:3000, isloading:false});
            this.getTeamService.getTeams();
          },
          (error) => {
            this.$alert.set({alert:"error",custommsg:'No se pudo eliminar el equipo seleccionado',closingAftter:4000, isloading:false});
          }
        );
    }, 0);
  }
}
