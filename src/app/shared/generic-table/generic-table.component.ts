import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnObject } from './models/column-object.enum';
import { Button } from '../generic-button/models/button.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericTableComponent implements OnInit, AfterViewInit {
  @Input() set tableData(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
  };
  @Input() set columns(columnData: ColumnObject[]) {
    this.newColumns = this.configureColumns(columnData);
  };
  @Input() set extraConfig(config: any) {
    this.config = config;
  }
  private paginator: MatPaginator;
  private sort: MatSort;
  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.dataSource.sort = this.sort;
  };
  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.dataSource.paginator = this.paginator;
  };
  newColumns: ColumnObject[];
  config: {[key: string]: any};
  dataSource: MatTableDataSource<any>;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.changeDetector.detectChanges();
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;

    // })
  }

  onClick(row: any): void {
    this.router.navigate([`/items/${row.id}`]);
  }

  private configureColumns(columnData: ColumnObject[]): ColumnObject[] {
    let columns: ColumnObject[] = [];

    columns = columnData?.slice().map(column => {
      let columnNameArray = Object.values(column)[0].split('');
      columnNameArray = [columnNameArray[0].toUpperCase(), ...columnNameArray.slice(1)];
      const reformattedColumn = columnNameArray.join('');

      return {name: reformattedColumn, colType: Object.values(column)[1]};
    }) as ColumnObject[];

    return columns;
  }
}
