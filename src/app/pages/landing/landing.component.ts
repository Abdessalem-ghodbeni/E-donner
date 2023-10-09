import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { FormModalComponent } from "src/app/components/modals/landing-forms/form-modal/form-modal.component";
import { Form2ModalComponent } from "src/app/components/modals/landing-forms/form2-modal/form2-modal.component";
@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.scss"],
})
export class LandingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openForm(index: number) {
    let dialogRef;
    switch (index) {
      case 0:
        dialogRef = this.dialog.open(FormModalComponent, {
          width: "auto",
          height: "auto",
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("The dialog was closed");
        });

        break;
      case 1:
        dialogRef = this.dialog.open(Form2ModalComponent, {
          width: "auto",
          height: "auto",
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("The dialog was closed");
        });
        break;
      default:
        break;
    }
  }
}
