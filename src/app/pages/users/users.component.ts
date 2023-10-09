import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { users } from "src/app/lib/dummy";
import { ICenter } from "src/app/models/center";
import { IUser } from "src/app/models/user";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  centerId= JSON.parse(localStorage.getItem('user')).id_centre 
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
  constructor(private router: Router ,  private service:Service ) {
   
   
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



  ngOnInit(): void {this.getAllCitoyens()}

  getAllCitoyens(){

    this.service.getAllCitoyens().subscribe(
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
  removeUser(requestId: any) {
    showConfirmationAlert("Vous souhaitez supprimer ce citoyen?", () => {
      this.service.deleteResponsable(requestId).subscribe(
        (data: any) => {
          if (data.msg === "success") {

            Swal.fire({
              icon: 'success',
              title: 'citoyen a été supprimé',
              showConfirmButton: false,
              timer: 1500
            })
            this.getAllCitoyens() 
          }

        },
        (err) => {

          Swal.fire({
            icon: 'error',
            title: 'essayez une autre fois !',
            showConfirmButton: false,
            timer: 1500
          })
      
          console.log(err);
        }
      );

           
    });
  
  }
}
