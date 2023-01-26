import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailsComponent } from './components/details/details.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import { SaveChangesGuard } from './components/edit-item/save-changes.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './shared/auth/admin.guard';
import { AuthGuard } from './shared/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AdminGuard] },
  { path: 'items/:item_id', component: DetailsComponent, canActivate: [AuthGuard] },
  { path: 'item/add', component: AddItemComponent, canActivate: [AdminGuard] },
  { path: 'items/:item_id/edit', component: EditItemComponent, canActivate: [AdminGuard], canDeactivate: [SaveChangesGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
