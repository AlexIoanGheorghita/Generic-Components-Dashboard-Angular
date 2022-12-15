import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { first, last } from 'rxjs';
import { AuthService } from './shared/auth/auth.service';
import { HeaderService } from './shared/header/services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularExercise';
  currentPath: string;

  constructor(
    private authService: AuthService,
    private location: Location,
    private router: Router
   ) {}

  ngOnInit() {
    this.authService.autoLogin();

    this.router.events.pipe().subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentPath = this.location.path();
        console.log(this.currentPath);
      }
    })
  }
}
