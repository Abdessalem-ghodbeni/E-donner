import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute } from "@angular/router";
import { bloodSupply } from "src/app/lib/dummy";
import { IBloodSupply } from "src/app/models/bloodSupply";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-blood-supply",
  templateUrl: "./blood-supply.component.html",
  styleUrls: ["./blood-supply.component.scss"],
})
export class BloodSupplyComponent implements OnInit, AfterViewInit {
  
  displayedColumns: string[] = ["family", "supply", "action"];
  dataSource: MatTableDataSource<IBloodSupply>;
  bloodSupply: IBloodSupply[] =bloodSupply;
  editIndex: number = -1;
  supply: number;
  centerId:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
  constructor( private activatedRouter: ActivatedRoute , private service:Service ) {
    if (this.role=== "admin"){
      this.centerId = Number(this.activatedRouter.snapshot.params.id);
    }else {
      this.centerId = JSON.parse(localStorage.getItem('user')).id_centre 
    }
    
   
   
  }

  ngOnInit(): void {this.getStockSangByCentreId()}

  getStockSangByCentreId(){

    this.service.getStockSangByCentreId(this.centerId).subscribe(
      (data: any) => {
        if (data !== undefined) {
           bloodSupply.forEach(function(item) {
             data.forEach(newItem => {
              if (newItem.groupe_sanguin  === item.family) {
                item.supply = newItem.nombre_paquets 
              }
             });
       
          });

          this.dataSource = new MatTableDataSource(bloodSupply);

        }
      },
      (err) => {
        console.log(err);
      }
    );

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
  editSupply(supplyId: number) {
    const supplyElement = this.bloodSupply.find(
      (element) => element.id === supplyId
    );
    if (!supplyElement) return;
    this.supply = supplyElement.supply;
    this.editIndex = supplyId;
    // this.bloodSupply = bloodSupply;
    // this.dataSource = new MatTableDataSource(bloodSupply);
  }
  confirmSupply(supplyFamily: any) {


    let data = {
      id_centre: this.centerId,
      groupe_sanguin : supplyFamily,
      nombre_paquets :this.supply
    }
  


    this.service.modify_Stock(data).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "modification avec succès", "success");
          this.getStockSangByCentreId()

          this.supply = 0;
          this.editIndex = -1;
        
        } 
      },err=>{
        Swal.fire({
          title: 'Erreur!',
          text: 'Vérifier votre informations, essayez une autre fois!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        
      });
    
  }
}
