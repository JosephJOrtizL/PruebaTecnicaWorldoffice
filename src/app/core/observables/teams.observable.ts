import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TeamsObservable {
  private teams = new BehaviorSubject<TeamsObservableInterface | null>(
    null
  );
  private $teams = this.teams.asObservable();

  public set(data: TeamsObservableInterface | null): void {
    this.teams.next(data);
  }

  public get(): Observable<TeamsObservableInterface | null> {
    return this.$teams;
  }
}

export interface TeamsObservableInterface {
    teams?: TeamsInterface[];
    team?: TeamsInterface;
    isLoading?:boolean;
    isArray?:boolean;
}

export interface TeamsInterface{
    capacity?: number;
    trainer?: string;
    stadium?:string;
    founded?:string
    id?:number;
    nationality?:string;
    name?: string;
    webSite?:string;
    value?:string;
}
