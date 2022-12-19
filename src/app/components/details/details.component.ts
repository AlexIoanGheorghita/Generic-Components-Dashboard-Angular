import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { HeaderService } from 'src/app/shared/header/services/header.service';
import { Person } from 'src/app/shared/models/star-wars-person.model';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {
  itemDetails?: any;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private starWarsService: StarWarsService,
    private headerService: HeaderService
  ) {}

  ngOnInit(): void {
    this.headerService.title.next('Item Details');

    this.subscription = this.route.params.subscribe((param: Params) => {
      console.log(+param['item_id']);
      this.itemDetails = this.starWarsService.getItem(+param['item_id']);
      console.log(this.itemDetails);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
