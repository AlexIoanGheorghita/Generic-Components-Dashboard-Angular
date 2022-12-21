import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/auth/auth.service';
import { StarWarsService } from './shared/services/star-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'AngularExercise';
  currentPath: string;
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private location: Location,
    private router: Router,
    private starWarsService: StarWarsService
   ) {
    console.log('App component constructor');
   }

  ngOnInit() {
    this.authService.autoLogin();

    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.location.path();
      }
    });

    // this.subscription.add(this.starWarsService.init('/people').subscribe(items => {
    //   this.starWarsService.setItems(items['results']);
    // }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.starWarsService.clearList();
  }
}
