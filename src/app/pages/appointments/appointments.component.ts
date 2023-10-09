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
  selector: "app-appointments",
  templateUrl: "./appointments.component.html",
  styleUrls: ["./appointments.component.scss"],
})
export class AppointmentsComponent implements OnInit {
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

  ngOnInit(): void {this.getRendezVousByCentreId()}

  getRendezVousByCentreId(){

    this.service.getRendezVousByCentreId(this.centerId).subscribe(
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

  acceptAppointment(appointmentId: any) {
    showConfirmationAlert("Vous souhaitez accepter ce rendez-vous?", () => {
    

      this.service.accepterRendezvous(appointmentId).subscribe(
        (data:any)=>{
   
          if(data){
   
            Swal.fire("Succès!", "modification avec succès", "success");
            this.getRendezVousByCentreId()
   
          } 
        },err=>{
          Swal.fire({
            title: 'Erreur!',
            text: 'Vérifier votre informations, essayez une autre fois!',
            icon: 'error',
            confirmButtonText: 'OK'
          })
          
        });
    });
  }



  refuseAppointment(appointmentId: any) {
    showConfirmationAlert("Vous souhaitez reporter ce rendez-vous?", () => {
      this.service.refuserRendezvous(appointmentId).subscribe(
        (data:any)=>{
   
          if(data){
   
            Swal.fire("Succès!", "modification avec succès", "success");
            this.getRendezVousByCentreId()
   
          } 
        },err=>{
          Swal.fire({
            title: 'Erreur!',
            text: 'Vérifier votre informations, essayez une autre fois!',
            icon: 'error',
            confirmButtonText: 'OK'
          })
          
        });
    });
  }
}
