import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.user.pipe(
      take(1),
      map((user) => {
        if (user) {
          if (user.role && user.role === 'admin') {
            return true;
          }
          return this.router.createUrlTree(['/']);
        }
        return this.router.createUrlTree(['/login']);
      })
    );
  }
}
