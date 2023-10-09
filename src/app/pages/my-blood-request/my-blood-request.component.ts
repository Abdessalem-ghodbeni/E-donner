import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

import { Service } from "../../services/service";


@Component({
  selector: "app-my-blood-request ",
  templateUrl: "./my-blood-request.component.html",
  styleUrls: ["./my-blood-request.component.scss"],
})
export class MyBloodRequestComponent implements OnInit {
  displayedColumns: string[] = ["groupe_sanguin", "date", "center"];
  userId = JSON.parse(localStorage.getItem('user')).id
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service:Service) {
  
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {this.getMyBloodRequest()}

  getMyBloodRequest(){

    this.service.getMyBloodRequest(this.userId).subscribe(
      (data: any) => {
        if (data !== undefined) {
         
          this.dataSource = new MatTableDataSource(data);

        }
      },
      (err) => {
        console.log(err);
      }
    );

  }




}
