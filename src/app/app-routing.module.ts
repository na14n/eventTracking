import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

  // {
  //   path: 'bookmark',
  //   loadChildren: () => import('./bookmark/bookmark.module').then( m => m.BookmarkPageModule)
  // },
  // {
  //   path: 'history',
  //   loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  // },
  // {
  //   path: 'menu',
  //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
