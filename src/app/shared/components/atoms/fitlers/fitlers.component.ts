import { Component, OnInit } from '@angular/core';
import { GetTeamsService } from 'src/app/core/services/get/getTeams.service';

@Component({
  selector: 'app-fitlers',
  templateUrl: './fitlers.component.html',
  styleUrls: ['./fitlers.component.scss']
})
export class FitlersComponent implements OnInit {
 public startDate: Date = new Date();
 public endDate!: Date;
 public searchQuery: string= '';
 public isShowingClear:boolean =false;
 public isMenuOpen = false;
  constructor(
    private getTeamService:GetTeamsService
  ) { }

  ngOnInit(): void {}
  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public onSearchDate() {
    let startDate = this.getDateFormat(this.startDate);
    if(this.startDate != undefined && this.startDate != null){
      if(this.endDate == undefined || this.endDate == null){
        this.getTeamService.getTeamByDate(startDate,this.getDateFormat(new Date()))
      }else{
        this.getTeamService.getTeamByDate(startDate,this.getDateFormat(this.endDate))
      }
      this.searchQuery = '';
      this.isShowingClear = true;
      this.isMenuOpen=false;
    }
  }
  public onSearch() {
    if(this.searchQuery != undefined && this.searchQuery != null){
      this.getTeamService.getTeamDetail(this.searchQuery);
      this.startDate = new Date();
      this.endDate = null!;
      this.isShowingClear = true;
      this.isMenuOpen =false;
    }
  }
  public onClear():void{
    this.getTeamService.getTeams();
    this.isShowingClear = false;
  }
  private getDateFormat(dateOriginal: Date): string {
    const date: Date = dateOriginal;
    const format: any = { day: '2-digit', month: '2-digit', year: 'numeric' };
    let finalDate: string = date.toLocaleDateString('es-CO', format);
    const finalDateSplit:string[] = finalDate.split('/');
    finalDate = finalDateSplit.join('-')
    return finalDate;
  }
}
