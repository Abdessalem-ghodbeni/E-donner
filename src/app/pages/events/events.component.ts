import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { events } from "src/app/lib/dummy";
import { IEvent } from "src/app/models/event";
import { Service } from "src/app/services/service";
import { getRole, isCitoyen } from "src/app/utils/storage";

@Component({
  selector: "app-events",
  templateUrl: "./events.component.html",
  styleUrls: ["./events.component.scss"],
})
export class EventsComponent implements OnInit {

  displayedColumns: string[] 
  role: string = getRole();
  dataSource: MatTableDataSource<IEvent>;
  events: IEvent[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isCitoyen: boolean = isCitoyen();
  constructor(private service:Service ) {
    
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
    if (this.role =="citoyen"){

    //  this.displayedColumns= ["name", "date", "centre" , "action"];
    this.displayedColumns = ["name", "date" , "centre"];
    }
    else{
        this.displayedColumns = ["name", "date" , "centre"];
    }

    this.getAllEvenement()
  }


  

  getAllEvenement(){

    this.service.getAllEvenement().subscribe(
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




  participate(eventId: any) {
    showConfirmationAlert("Vous souhaitez participer à cet événnement?", () => {
      const element = this.events.find((event) => event.id === eventId);
      if (!element) return;
      element.isParticipated = true;
      this.dataSource = new MatTableDataSource(this.events);
      showSuccessAlert("Participation réussie");
    });
  }
}
