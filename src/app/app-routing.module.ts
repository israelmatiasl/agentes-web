import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavigationComponent } from './layouts/top-navigation/top-navigation.component';

const routes: Routes = [
  {
    path: '',
    component: TopNavigationComponent,
    loadChildren: () => import('./modules/custom.module').then(m => m.CustomModule)
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
