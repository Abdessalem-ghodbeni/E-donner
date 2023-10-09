import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { appointments } from "src/app/lib/dummy";
import { IAppointment, Status } from "src/app/models/appointment";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-accepted-appointments",
  templateUrl: "./accepted-appointments.component.html",
  styleUrls: ["./accepted-appointments.component.scss"],
})
export class AcceptedAppointmentsComponent implements OnInit {
  displayedColumns: string[] = ["name", "date", "action"];
  centerId = JSON.parse(localStorage.getItem('user')).id_centre 
  dataSource: MatTableDataSource<IAppointment>;
  appointments: IAppointment[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor(private service:Service) {
    //TODO get responsable appointments
  
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

  ngOnInit(): void {this.getAcceptedRendezVousByCentreId()}

  getAcceptedRendezVousByCentreId(){

    this.service.getAcceptedRendezVousByCentreId(this.centerId).subscribe(
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



  repondre(id){

    Swal.fire({
      title: 'Ajouter diagnostic ',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonText: 'confirmer',
      cancelButtonText: 'Annuler',
      showLoaderOnConfirm: true,
      preConfirm: (text) => {



        this.service.ajouterDiagnostic(id ,  text).subscribe(
          (data: any) => {
            if (data !== undefined) {
             
              showSuccessAlert("Ce dignostique est enregistré avec succés");
              this.getAcceptedRendezVousByCentreId()
        
            }
          },
          (err) => {
            console.log(err);
          }
        );
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
       
      }
    })

    

  }

}
