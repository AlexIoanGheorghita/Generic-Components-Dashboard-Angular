import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../shared/header/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.title.next('Home');
  }
}
