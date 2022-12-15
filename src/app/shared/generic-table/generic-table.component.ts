import { Component, Input, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  @Input() set columns(columnData: string[]) {
    this.newColumns = columnData?.slice().map(column => {
      let columnArray = column.split('');
      columnArray = [columnArray[0].toUpperCase(), ...columnArray.slice(1)];
      return columnArray.join('');
    });
  };
  @Input() service: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  newColumns: string[];
  dataSource: MatTableDataSource<any>;

  constructor() {}
}
