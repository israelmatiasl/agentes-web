import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { MapsComponent } from './maps/maps.component';
import { AgmCoreModule } from '@agm/core';
import {environment} from '../../environments/environment';

@NgModule({
  imports: [
    AgmCoreModule
  ],
  declarations: [
    LoaderComponent,
    MapsComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent,
    MapsComponent
  ]
})
export class SharedModule {}
