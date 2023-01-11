import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { DetailsComponent } from './components/details/details.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'items/:item_id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'item/add', component: AddItemComponent, canActivate: [AuthGuard] },
  { path: 'items/:item_id/edit', component: EditItemComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
