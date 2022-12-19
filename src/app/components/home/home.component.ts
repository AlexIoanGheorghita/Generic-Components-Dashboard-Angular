import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Button } from 'src/app/shared/generic-button/models/button.model';
import { ColumnObject } from 'src/app/shared/generic-table/models/column-object.enum';
import { ColumnType } from 'src/app/shared/generic-table/models/column-type.enum';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';
import { HeaderService } from '../../shared/header/services/header.service';

type ButtonObject = {[key: string]: Button};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any;
  columns: ColumnObject[];
  btnConfig: ButtonObject;
  private subscription: Subscription;

  constructor(
    private headerService: HeaderService,
    private starWarsService: StarWarsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.headerService.title.next('Home');

    this.subscription = this.starWarsService.starWarsList.subscribe(list => {
      this.data = list;
      console.log(this.data);
      this.columns = this.configureColumns();
      this.btnConfig = this.configureButtons();
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

  private configureButtons(): ButtonObject {
    return {
      'Edit':
      {
        text: 'Edit',
        config: {
          color: '#FFFFFF',
          backgroundColor: '#4d4dff',
          fontSize: 16,
          borderRadius: 5
        },
        action: () => {
          console.log('Edit');
        }
      },
      'Delete':
      {
        text: 'Delete',
        config: {
          color: '#FFFFFF',
          backgroundColor: '#ff1a1a',
          fontSize: 16,
          borderRadius: 5
        },
        action: (id: number) => {
          console.log(this.starWarsService);
          this.starWarsService.deleteItem(id);
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
