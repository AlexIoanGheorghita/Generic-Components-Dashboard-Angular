import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private headerService: HeaderService
   ) {}

  ngOnInit() {
    this.authService.autoLogin();

    this.currentPath = this.location.path();
  }
}
