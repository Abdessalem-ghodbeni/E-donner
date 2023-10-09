import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { donations, users, appointments } from "src/app/lib/dummy";
import { IDonation } from "src/app/models/donation";
import { getRole } from "src/app/utils/storage";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { IUser } from "src/app/models/user";
import { ICenter } from "src/app/models/center";
import { ActivatedRoute, Router } from "@angular/router";
import { IAppointment } from "src/app/models/appointment";

@Component({
  selector: "app-user-history",
  templateUrl: "./user-history.component.html",
  styleUrls: ["./user-history.component.scss"],
})
export class UserHistoryComponent implements OnInit, AfterViewInit {
  userId: number;
  userData: IUser;
  displayedColumns: string[] = ["id", "date", "center", "status"];
  dataSource: MatTableDataSource<IAppointment>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor(private activatedRouter: ActivatedRoute, private router: Router) {
    this.getUserData();
    this.dataSource = new MatTableDataSource(appointments);
  }

  getUserData() {
    //mimic an api call
    this.userId = Number(this.activatedRouter.snapshot.params.id);
    this.userData = users.find((user: IUser) => user.id === this.userId);

    if (!this.userData) this.router.navigateByUrl("/users");
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
  ngOnInit(): void {}
}
