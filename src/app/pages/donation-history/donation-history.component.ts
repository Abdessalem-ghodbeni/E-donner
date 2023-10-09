import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { showConfirmationAlert, showSuccessAlert } from "src/app/lib/alerts";
import { donations } from "src/app/lib/dummy";
import { IDonation } from "src/app/models/donation";
import { getRole } from "src/app/utils/storage";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Service } from "src/app/services/service";

@Component({
  selector: "app-donation-history",
  templateUrl: "./donation-history.component.html",
  styleUrls: ["./donation-history.component.scss"],
})
export class DonationHistoryComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [ "date", "centre"];
  dataSource: MatTableDataSource<IDonation>;
  userId = JSON.parse(localStorage.getItem('user')).id
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  role: string = getRole();
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
  ngOnInit(): void {this.getListDonnationByUserId()}

  getListDonnationByUserId(){

    this.service.getListDonnationUserId(this.userId).subscribe(
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
}
