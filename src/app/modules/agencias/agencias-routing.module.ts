import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AgenciasListComponent } from './agencias-list/agencias-list.component';
import { AgenciasAddEditComponent } from './agencias-add-edit/agencias-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AgenciasListComponent
  },
  {
    path: 'add',
    component: AgenciasAddEditComponent
  },
  {
    path: 'edit/:id',
    component: AgenciasAddEditComponent
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AgenciasRoutingModule{}
