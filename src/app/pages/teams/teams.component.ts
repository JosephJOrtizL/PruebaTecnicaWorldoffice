import { Component, OnDestroy, OnInit } from '@angular/core';
import { TeamsInterface, TeamsObservable } from 'src/app/core/observables/teams.observable';
import { GetTeamsService } from 'src/app/core/services/get/getTeams.service';
import { Subscription } from 'rxjs';
import { DeleteTeamsService } from 'src/app/core/services/delete/deleteTeam.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit, OnDestroy {
  public teamsArray: TeamsInterface[] = [];
  public isLoading:boolean = false;
  private subscriptions: Subscription[] = [];
  constructor(
    private teamsService:GetTeamsService,
    private $teams:TeamsObservable,
    private router: Router) { }

  ngOnInit(): void {
    this.teamsService.getTeams();
    this.subscriptions.push(
      this.$teams.get().subscribe(data=>{
        this.teamsArray = data?.teams ?? [];
        if(!data?.isArray){
          if(Object.keys(data?.team!).length>0){
            this.teamsArray.push(data?.team!);
          }
        }
        this.isLoading = data?.isLoading ?? false;
        console.log(this.teamsArray);
        
      })
    )
  }
  public onClickCard(id:number):void{
    this.router.navigate(['/equipo'],{ queryParams: { id: id }})
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=>item.unsubscribe())
  }
}
