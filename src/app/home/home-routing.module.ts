import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'logIn',
    loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path:'details',
    loadChildren: () => import('../event-details/event-details.module').then( m => m.EventDetailsPageModule),
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
