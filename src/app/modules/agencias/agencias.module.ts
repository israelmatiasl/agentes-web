import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AgenciasRoutingModule } from './agencias-routing.module';
import { AgenciasListComponent } from './agencias-list/agencias-list.component';
import { AgenciasAddEditComponent } from './agencias-add-edit/agencias-add-edit.component';

@NgModule({
  declarations: [
    AgenciasListComponent,
    AgenciasAddEditComponent
  ],
  imports: [
    SharedModule,
    AgenciasRoutingModule
  ]
})
export class AgenciasModule {}
