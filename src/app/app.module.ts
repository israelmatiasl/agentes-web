import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import {SedesReducer} from './core/store/reducers/sedes.reducer';
import {EffectsModule} from '@ngrx/effects';
import {SedesEffects} from './core/store/effects/sedes.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
    StoreModule.forRoot({
      sedes: SedesReducer
    }),
    EffectsModule.forRoot([
      SedesEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
