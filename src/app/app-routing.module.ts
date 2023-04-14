import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardGuard } from './core/guards/dashboard.guard';
import { LoginGuard } from './core/guards/login.guard';

const routes: Routes = [
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { path: "login",
  loadChildren: () =>
    import(
      "../app/pages/login/login.module"
    ).then((module) => module.LoginModule),
    canActivate: [LoginGuard] 
  },
  { path: "equipos",
  loadChildren: () =>
    import(
      "../app/pages/teams/teams.module"
    ).then((module) => module.TeamsModule),
    canActivate: [DashBoardGuard] 
  },
  { path: "nuevo-equipo",
  loadChildren: () =>
    import(
      "../app/pages/add-team/add-team.module"
    ).then((module) => module.AddTeamModule),
    canActivate: [DashBoardGuard] 
  },
  { path: "equipo",
  loadChildren: () =>
  import(
    "../app/pages/add-team/add-team.module"
  ).then((module) => module.AddTeamModule),
  canActivate: [DashBoardGuard] 
  },

  { path: "**",
  loadChildren: () =>
  import(
    "../app/pages/teams/teams.module"
  ).then((module) => module.TeamsModule),
  canActivate: [DashBoardGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
