import { Component, OnInit, OnDestroy} from '@angular/core';
import { AlertObservable, AlertObservableInterface } from 'src/app/core/observables/alert.observable';
import { Subscription } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  public alertType: AlertObservableInterface = { alert: null };
  private subscriptions: Subscription[] = [];
  constructor(
    private $alert: AlertObservable,
    private router:Router,) { }

  ngOnInit(): void {
    this.router.events.subscribe((val) => {     
      if (val instanceof NavigationEnd) {
        if(val.url==="/login"){
          document.documentElement.style.setProperty(
            '--dynamicPadding',
            '0px'
          );
        }else if(val.url==="/nuevo-equipo"){
          document.documentElement.style.setProperty(
            '--dynamicPadding',
            '20px'
          );
        }
        else{
          document.documentElement.style.setProperty(
            '--dynamicPadding',
            '68px'
          );
        }
      } 
    });
    this.subscriptions.push(this.$alert.get().subscribe((data) => { 
      this.alertType.alert = data?.alert ?? null;
      this.alertType.custommsg = data?.custommsg;      
      if (data?.alert) {
        if(data?.closingAftter){
          setTimeout(() => {
            this.closeAlert();            
          }, data?.closingAftter);
        }
      }     
    }));
  }
  
  public closeAlert(): void {      
      this.$alert.set({ alert: null, });
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(item=>item.unsubscribe())
  }
}
