import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClientComponent } from './client/list-client/list-client.component';
import { SingleClientComponent } from './client/single-client/single-client.component';
import { ListConditionComponent } from './condition/list-condition/list-condition.component';
import { SingleConditionComponent } from './condition/single-condition/single-condition.component';
import { ListGiftComponent } from './gift/list-gift/list-gift.component';
import { SingleGiftComponent } from './gift/single-gift/single-gift.component';
import { AuthGuard } from './helpers/auth.guard';
import { NotificationsComponent } from './notifications/notifications.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'auth/signin', component: SigninComponent },
  { path: 'client', canActivate: [AuthGuard], component: ListClientComponent },
  {
    path: 'client/:id',
    canActivate: [AuthGuard],
    component: SingleClientComponent,
  },
  {
    path: 'condition',
    canActivate: [AuthGuard],
    component: ListConditionComponent,
  },
  {
    path: 'condition/:id',
    canActivate: [AuthGuard],
    component: SingleConditionComponent,
  },
  { path: 'gift', canActivate: [AuthGuard], component: ListGiftComponent },
  {
    path: 'gift/:id',
    canActivate: [AuthGuard],
    component: SingleGiftComponent,
  },
  {
    path: 'notifications',
    canActivate: [AuthGuard],
    component: NotificationsComponent,
  },
  {
    path: '',
    redirectTo: 'client',
    pathMatch: 'full' /*prevent bugs on empty paths*/,
  },
  { path: '**', redirectTo: 'client' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
