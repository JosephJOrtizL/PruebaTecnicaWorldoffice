import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoResultsModule } from 'src/app/shared/components/no-results/no-results.module';
import { DeleteButtonModule } from 'src/app/shared/components/atoms/delete-button/delete-button.module';
import { FitlersModule } from 'src/app/shared/components/atoms/fitlers/fitlers.module';
@NgModule({
  declarations: [
    TeamsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    NoResultsModule,
    DeleteButtonModule,
    FitlersModule
  ]
})
export class TeamsModule { }
