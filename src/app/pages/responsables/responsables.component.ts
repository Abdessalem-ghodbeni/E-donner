import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { responsables } from "src/app/lib/dummy";
import { IResponsable } from "src/app/models/user";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-responsables",
  templateUrl: "./responsables.component.html",
  styleUrls: ["./responsables.component.scss"],
})
export class ResponsablesComponent implements OnInit {
  displayedColumns: string[] = [
    "name",
    "phone",
    "email",
    "cin",
    "ville",
    "action",
  ];
  dataSource: MatTableDataSource<IResponsable>;
  responsables: IResponsable[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  idCentre:any =JSON.parse(localStorage.getItem('user')).id_centre 
  idConnectedUser = JSON.parse(localStorage.getItem('user')).id
  constructor( private service:Service) {
   
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

  ngOnInit(): void {
    this.getResponsablesByCentreId()
  }

  
  getResponsablesByCentreId(){


    this.service.getResponsablesByCentreId(this.idCentre).subscribe(
      (data:any)=>{
 
        if(data){
          let responsables =  data.filter(el =>  el.id !== this.idConnectedUser);
 
          this.responsables = responsables;
          this.dataSource = new MatTableDataSource( this.responsables);
        
        } 
      },err=>{
         console.log("error"+err)
      });
  
  }

  removeUser(responsableId: any) {
    showConfirmationAlert("Vous souhaitez supprimer ce responsable?", () => {
      this.service.deleteResponsable(responsableId).subscribe(
        (data: any) => {
          if (data.msg === "success") {

            Swal.fire({
              icon: 'success',
              title: 'responsable a été supprimé',
              showConfirmButton: false,
              timer: 1500
            })
            this.getResponsablesByCentreId() 
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
