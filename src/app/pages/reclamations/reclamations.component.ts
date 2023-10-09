import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { reclamations } from "src/app/lib/dummy";
import { IRecalamtion } from "src/app/models/reclamation";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";

@Component({
  selector: "app-reclamations",
  templateUrl: "./reclamations.component.html",
  styleUrls: ["./reclamations.component.scss"],
})
export class ReclamationsComponent implements OnInit {
  displayedColumns: string[] = ["email", "date", "message", "action"];
  dataSource: MatTableDataSource<IRecalamtion>;
  reclamations: IRecalamtion[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
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

  ngOnInit(): void {

    this.getAllReclamation()
  }


  

  getAllReclamation(){

    this.service.getAllReclamation().subscribe(
      (data: any) => {
        if (data !== undefined) {
          this.reclamations = data;
          this.dataSource = new MatTableDataSource(this.reclamations);
       
    

        }
      },
      (err) => {
        console.log(err);
      }
    );

  }


}
