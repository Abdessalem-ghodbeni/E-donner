import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { centers } from "src/app/lib/dummy";
import { getRole } from "src/app/utils/storage";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { AppointmentModalComponent } from "src/app/components/modals/appointment-modal/appointment-modal.component";
import { CheckFormComponent } from "src/app/components/modals/check-form/check-form.component";
import { ICenter } from "src/app/models/center";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { Router } from "@angular/router";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";
import { DemandeSangModalComponent } from "src/app/components/modals/landing-forms/demandeSang-modal/demandeSang-modal.component";

@Component({
  selector: "app-centers",
  templateUrl: "./centers.component.html",
  styleUrls: ["./centers.component.scss"],
})
export class CentersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ["nom", "telephone", "email", "addresse", "action"];
  idConnectedUser = JSON.parse(localStorage.getItem('user')).id
  isDonner:any
  dataSource: MatTableDataSource<ICenter>;
  centers: ICenter[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor(public dialog: MatDialog , private router: Router , private service:Service) {
  
  }
  ngOnInit(): void {
    this.getCentres()
    this.getUserById(this.idConnectedUser)
  }
  getUserById(id){


    
    this.service.getUserById(id).subscribe(
      (data:any)=>{
 
        if(data){

 
          this.isDonner= data.is_donner
        
        } 
      },err=>{
         console.log("error"+err)
      });
  }
  

  
  getCentres(){


    this.service.getAllCentres().subscribe(
      (data:any)=>{
 
        if(data){
 
          this.centers = data;
          this.dataSource = new MatTableDataSource(this.centers);
        
        } 
      },err=>{
         console.log("error"+err)
      });
  
  }


  removeCenter(centerId: any) {

    
    Swal.fire({
      text: "Êtes-vous sûr de vouloir supprimer ce centre?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteCentre(centerId).subscribe(
          (data: any) => {
            if (data.msg === "success") {

              Swal.fire({
                icon: 'success',
                title: 'Centre a été supprimé',
                showConfirmButton: false,
                timer: 1500
              })
              this.getCentres() 
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
      }
    });
  }


  demandeSang(centerId:any){

    const dialogRef = this.dialog.open(DemandeSangModalComponent);
    //@ts-ignore
    dialogRef.componentInstance.centerId = centerId;
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed");
    });


  }

  makeAppointment(centerId: any) {

    if (this.isDonner === 3){
          //first time
          const dialogCheckRef = this.dialog.open(CheckFormComponent, {
            data: { centerId },
          });

          dialogCheckRef.afterClosed().subscribe((result) => {
            //data from all forms
            console.log({ result });
            location.reload();
          });
    }
    else{
      //not first time
    const dialogRef = this.dialog.open(AppointmentModalComponent, {
     data: {  centerId },
    });
     dialogRef.afterClosed().subscribe((result) => {
       if (result) 
       {
         showSuccessAlert("Votre rendez-vous est fixé");
       location.reload();}
    }); 
    }
    
   
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
}
