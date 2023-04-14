import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-results',
  templateUrl: './no-results.component.html',
  styleUrls: ['./no-results.component.scss']
})
export class NoResultsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  public reload():void{
    if(this.router.url.includes('/equipos')){
      window.location.reload();
    }else{
      this.router.navigate(['/equipos'])
    }
  }
}
