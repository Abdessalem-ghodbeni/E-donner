import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { bloodRequests } from "src/app/lib/dummy";
import { IBloodRequest } from "src/app/models/bloodRequest";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-blood-request",
  templateUrl: "./blood-request.component.html",
  styleUrls: ["./blood-request.component.scss"],
})
export class BloodRequestComponent implements OnInit {
  displayedColumns: string[] = ["name", "date","groupe_sanguin", "center"];
  dataSource: MatTableDataSource<IBloodRequest>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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

  ngOnInit(): void {this.getBloodRequest()}

  getBloodRequest(){

    this.service.getBloodRequest().subscribe(
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


  
  archiverDemande(id: any) {

    
    Swal.fire({
      text: "Êtes-vous sûr de vouloir archiver cette demande?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui",
      cancelButtonText: "Non",
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.archiverDemande(id).subscribe(
          (data: any) => {
            if (data.msg === "success") {

              Swal.fire({
                icon: 'success',
                title: 'Demande archivé!',
                showConfirmButton: false,
                timer: 1500
              })
              this.getBloodRequest() 
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


}
