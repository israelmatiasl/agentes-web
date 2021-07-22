import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    TopNavigationComponent,
    NavbarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: []
})
export class LayoutsModule {}
