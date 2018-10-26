import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmartTableComponent } from "./smart-data-table/smart-data-table.component";

const routes: Routes = [
  {
    path: '',
    children: [
        
      {
        path: 'famillia',
        component: SmartTableComponent,
        data: {
          title: 'Famille'
        }
      },      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }
