import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistsComponent } from './userlists/userlists.component';
import { UserComponent } from './userlists/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: 'userlists', pathMatch: 'full' },
  {
    path: 'userlists', component: UserlistsComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
