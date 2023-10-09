import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { centers, donations, users } from "src/app/lib/dummy";
import { IDonation } from "src/app/models/donation";
import { getRole } from "src/app/utils/storage";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { IUser } from "src/app/models/user";
import { ICenter } from "src/app/models/center";
import { ActivatedRoute, Router } from "@angular/router";
import { Service } from "src/app/services/service";

@Component({
  selector: "app-user-center-history",
  templateUrl: "./user-center-history.component.html",
  styleUrls: ["./user-center-history.component.scss"],
})
export class UserCenterHistoryComponent implements OnInit, AfterViewInit {
  centerId: number;
  centerData: ICenter;
  userId: number;
  userData: IUser;
  displayedColumns: string[] = ["id", "date"];
  dataSource: MatTableDataSource<IDonation>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor(private activatedRouter: ActivatedRoute, private router: Router ,  private service:Service) {
    this.centerId = Number(this.activatedRouter.snapshot.params.id);
    this.userId = Number(this.activatedRouter.snapshot.params.userId);
 
  
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
  ngOnInit(): void {this.getListDonnationByCenterIdAndUserId()}

  getListDonnationByCenterIdAndUserId(){

    this.service.getListDonnationByCenterIdAndUserId(this.centerId , this.userId).subscribe(
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
