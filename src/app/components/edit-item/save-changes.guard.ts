import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
  canDeactivate: () => boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
}

@Injectable({providedIn: 'root'})
export class SaveChangesGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {
    return component.canDeactivate();
  }
}
