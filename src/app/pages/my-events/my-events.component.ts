import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { events } from "src/app/lib/dummy";
import { IEvent } from "src/app/models/event";
import { Service } from "src/app/services/service";
import { getRole, isCitoyen } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-my-events",
  templateUrl: "./my-events.component.html",
  styleUrls: ["./my-events.component.scss"],
})
export class MyEventsComponent implements OnInit {
  displayedColumns: string[] = ["name", "date", "action"];
  centerId = JSON.parse(localStorage.getItem('user')).id_centre 
  dataSource: MatTableDataSource<IEvent>;
  events: IEvent[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isCitoyen: boolean = isCitoyen();
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

  ngOnInit(): void {this.getEvenementByCentreId()}

  getEvenementByCentreId(){

    this.service.getEvenementByCentreId(this.centerId).subscribe(
      (data: any) => {
        if (data !== undefined) {
          this.events = data;
          this.dataSource = new MatTableDataSource( this.events);

        }
      },
      (err) => {
        console.log(err);
      }
    );

  }

  removeEvent(eventId: any) {
    showConfirmationAlert("Vous souhaitez supprimer cet événnement?", () => {
     
    
        this.service.deleteEvenement(eventId).subscribe(
          (data: any) => {
            if (data.msg === "success") {

              Swal.fire({
                icon: 'success',
                title: 'Cet evenement a été supprimé',
                showConfirmButton: false,
                timer: 1500
              })
              this.getEvenementByCentreId() 
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
