import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
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

    let list = JSON.parse(<string>localStorage.getItem('list'));

    if (!list || list.length === 0) {
      (async () => {
        try {
          const items = await lastValueFrom(this.starWarsService.init('/people'));
          this.starWarsService.setItems(items['results']);
        } catch (err) {
          console.log(err);
        }
      })()
    } else {
      this.starWarsService.starWarsList.next(list);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.starWarsService.clearList();
  }
}
