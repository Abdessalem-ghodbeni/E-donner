import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { appointments } from "src/app/lib/dummy";
import { IAppointment, Status } from "src/app/models/appointment";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";

@Component({
  selector: "app-my-appointments",
  templateUrl: "./my-appointments.component.html",
  styleUrls: ["./my-appointments.component.scss"],
})
export class MyAppointmentsComponent implements OnInit {
  displayedColumns: string[] = ["date", "center","diagnostic", "action"];
  
  userId = JSON.parse(localStorage.getItem('user')).id
  dataSource: MatTableDataSource<IAppointment>;
  appointments: IAppointment[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor(private service:Service) {
    //get my appointments
   
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



  ngOnInit(): void {this.getRendezVousByUserId()}

  getRendezVousByUserId(){

    this.service.getRendezVousByUserId(this.userId).subscribe(
      (data: any) => {
        if (data !== undefined) {
          this.appointments = data;
          this.dataSource = new MatTableDataSource(this.appointments);
        }
      },
      (err) => {
        console.log(err);
      }
    );

  }
}
