import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { centers, users } from "src/app/lib/dummy";
import { ICenter } from "src/app/models/center";
import { IUser } from "src/app/models/user";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";

@Component({
  selector: "app-users-center",
  templateUrl: "./users-center.component.html",
  styleUrls: ["./users-center.component.scss"],
})
export class UsersCenterComponent implements OnInit {
  centerId: number;
  centerData: ICenter;
  displayedColumns: string[] = [
    "name",
    "city",
    "email",
    "phone",
    "blood",
    "action",
  ];
  dataSource: MatTableDataSource<IUser>;
  users: IUser[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor(private activatedRouter: ActivatedRoute, private router: Router ,  private service:Service ) {
    this.centerId = Number(this.activatedRouter.snapshot.params.id);
   
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



  ngOnInit(): void {this.getListDonnerByCenterId()}

  getListDonnerByCenterId(){

    this.service.getListDonnerByCenterId(this.centerId).subscribe(
      (data: any) => {
        if (data !== undefined) {
           this.users = data;
            this.dataSource = new MatTableDataSource(this.users);
       
       

        }
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
