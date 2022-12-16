import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { ColumnObject } from 'src/app/shared/generic-table/models/column-object.enum';
import { ColumnType } from 'src/app/shared/generic-table/models/column-type.enum';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';
import { HeaderService } from '../../shared/header/services/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;
  columns: ColumnObject[];
  private subscription: Subscription;

  constructor(
    private headerService: HeaderService,
    private starWarsService: StarWarsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.headerService.title.next('Home');

    this.subscription = this.starWarsService.init('/people').subscribe(items => {
      this.starWarsService.setItems(items['results']);
      this.data = this.starWarsService.getItems();
      console.log(this.data);
      this.columns = this.configureColumns();
    });
  }

  private configureColumns(): ColumnObject[] {
    let columns = Object.keys(this.starWarsService.getItem(1)).slice(1,6).map(column => {
      return { name: column, colType: 'data' } as ColumnObject
    });
    if (this.authService.getRole() === 'admin') {
      columns.push(
        { name: 'Edit', colType: ColumnType.BUTTON },
        { name: 'Delete', colType: ColumnType.BUTTON }
      )
    }

    return columns;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
