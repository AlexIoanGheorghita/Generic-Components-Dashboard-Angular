import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';
import { HeaderService } from '../../shared/header/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;
  columns: string[];
  private subscription: Subscription;

  constructor(
    private headerService: HeaderService,
    private starWarsService: StarWarsService
  ) {}

  ngOnInit(): void {
    this.headerService.title.next('Home');

    this.subscription = this.starWarsService.init('/people').subscribe(items => {
      this.starWarsService.setItems(items['results']);
      this.data = this.starWarsService.getItems();
      console.log(this.data);
      this.columns = Object.keys(this.starWarsService.getItem(1)).slice(1,6);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
