import { Component, OnDestroy, OnInit } from '@angular/core';
import { concat, concatMap, delay, last, Subscription, take, takeLast, tap } from 'rxjs';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { Button } from 'src/app/shared/generic-button/models/button.model';
import { ColumnObject } from 'src/app/shared/generic-table/models/column-object.enum';
import { ColumnType } from 'src/app/shared/generic-table/models/column-type.enum';
import { Person } from 'src/app/shared/models/star-wars-person.model';
import { StarWarsService } from 'src/app/shared/services/star-wars.service';
import { HeaderService } from '../../shared/header/services/header.service';

type ButtonObject = {[key: string]: Button};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  data: any[] = [];
  columns: ColumnObject[];
  btnConfig: ButtonObject;
  isLoading: boolean = true;
  private subscription: Subscription;
  timeoutToken: any;

  constructor(
    private headerService: HeaderService,
    private starWarsService: StarWarsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.headerService.title.next('Home');

    // this.timeoutToken = setTimeout(() => {
    //   this.data = this.starWarsService.getItems();
    //   this.columns = this.configureColumns();
    //   this.btnConfig = this.configureButtons();
    //   this.isLoading = false;
    // }, 200);

    this.subscription = this.starWarsService.starWarsList.subscribe(list => {
      if (list.length > 0) {
        this.isLoading = false;
        this.data = list;
        this.columns = this.configureColumns();
        this.btnConfig = this.configureButtons();
      }
    });
  }

  private configureColumns(): ColumnObject[] {
    let columns = Object.keys(this.data[0]).slice(1,6).map(column => {
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
        action: (data: Person) => {
          this.starWarsService.deleteItem(data.id);
        }
      }
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    clearTimeout(this.timeoutToken);
  }
}
