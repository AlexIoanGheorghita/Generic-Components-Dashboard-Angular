import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnObject } from './models/column-object.enum';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {
  @Input() set tableData(data: any[]) {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  };
  @Input() set columns(columnData: ColumnObject[]) {
    this.newColumns = this.configureColumns(columnData);
  };
  @Input() service: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  newColumns: ColumnObject[];
  dataSource: MatTableDataSource<any>;

  constructor() {}

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
