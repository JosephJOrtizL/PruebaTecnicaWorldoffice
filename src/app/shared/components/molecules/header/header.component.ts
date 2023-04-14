import { Component, OnInit } from '@angular/core';
import { PostLoginService } from 'src/app/core/services/post/postLogin.service';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isHidden:boolean = false;
  public headerItems = [
    {
        label: 'Inicio',
        link: './equipos',
        index: 1
    }, 
    {
        label: 'Crear Equipo',
        link: './nuevo-equipo',
        index: 0,
    },
];
  constructor(
    private loginService:PostLoginService,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {     
      if (val instanceof NavigationEnd) {
        if(val.url==="/login"){
          this.isHidden=true;
        }else{
          this.isHidden=false;
        }
      }     
    });
  }
  public onLogout():void{
    this.loginService.postLogout();
  }
}
