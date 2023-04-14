import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AlertObservable {
  private alert = new BehaviorSubject<AlertObservableInterface | null>(
    null
  );
  private $alert = this.alert.asObservable();

  public set(data: AlertObservableInterface | null): void {
    this.alert.next(data);
  }

  public get(): Observable<AlertObservableInterface | null> {
    return this.$alert;
  }
}

export interface AlertObservableInterface {
  alert: 'error' | 'custom-success' | null;
  custommsg?: string;
  closingAftter?:number;
  isloading?:boolean;
}
