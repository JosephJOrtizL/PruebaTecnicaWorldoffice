import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeamsInterface, TeamsObservable } from 'src/app/core/observables/teams.observable';
import { PostAddTeamService } from 'src/app/core/services/post/postAddTeam.service';
import { Subscription } from 'rxjs';
import { AlertObservable } from 'src/app/core/observables/alert.observable';
import { GetTeamsService } from 'src/app/core/services/get/getTeams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})

export class AddTeamComponent implements OnInit, OnDestroy {
  public maxDate:Date = new Date();
  public isDetail:boolean=false;
  public team:TeamsInterface ={
    id:-1,
    capacity:0,
    founded:'',
    value:'',
    name:'',
    webSite:'',
    trainer:'',
    stadium:'',
    nationality:''
  }
  public dynamicText = {
    title:'Añade un Nuevo Equipo',
    buttonLabel:'Agregar Equipo'
  }
  public isLoading:boolean=false;
  private subscriptions: Subscription[] = [];
  constructor(
    private addTeamService:PostAddTeamService, 
    private $alert:AlertObservable,
    private activatedRoute: ActivatedRoute,   
    private $teamDetail:TeamsObservable,
    private getTeam:GetTeamsService) { }

  ngOnInit(): void {
    let id= this.activatedRoute.snapshot.queryParamMap.get('id');
    if(id){
      this.fetchTeam(id);
      this.isDetail=true;
      this.dynamicText = {
        title:'Formulario de Actualización de Datos',
        buttonLabel:'Actualizar'
      }
    }
    this.subscriptions.push(
      this.$alert.get().subscribe(data=>{
        this.isLoading = data?.isloading ?? false;
      })
    )
    this.subscriptions.push(
      this.$teamDetail.get().subscribe(data=>{
        if(this.isDetail){
          this.team = data?.team!;
          this.isLoading = data?.isLoading ?? false;
        }
      })
    )
  }
  public onSubmit(teamForm: NgForm):void{
    if(this.isDetail){
    this.addTeamService.postUpdateTeam(this.team);
    }else
    this.addTeamService.postAddTeam(this.team);
  }
  private fetchTeam(id:string):void{
    this.getTeam.getTeamDetail(id);
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=>item.unsubscribe())
  }
}
