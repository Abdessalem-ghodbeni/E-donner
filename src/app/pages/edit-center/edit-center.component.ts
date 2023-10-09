import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { showSuccessAlert } from "src/app/lib/alerts";
import { centers } from "src/app/lib/dummy";
import { ICenter } from "src/app/models/center";
import { Service } from "src/app/services/service";
import { getRole } from "src/app/utils/storage";

@Component({
  selector: "app-edit-center",
  templateUrl: "./edit-center.component.html",
  styleUrls: ["./edit-center.component.scss"],
})
export class EditCenterComponent implements OnInit {
  centerId;
  centerInfo: FormGroup;
  
  role: string = getRole();
  constructor(private activatedRouter: ActivatedRoute, private router: Router ,  private service:Service) {
    this.centerId = Number(this.activatedRouter.snapshot.params.id);
    //get center by id
    this.centerInfo = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      addresse: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    });
  }
  getCentreByID(centerId: any) {
    

    this.service.getCentreById(centerId).subscribe(
      (data: any) => {
        if (data !== undefined) {
        
          this.centerInfo.patchValue({
            nom: data.nom,
            addresse: data.addresse ,
            telephone : data.telephone ,
            email : data.email 

          });
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {this.getCentreByID(this.centerId)}

  submit() {
    const data = { ...this.centerInfo.value, id: this.centerId };
    console.log({ data });
    showSuccessAlert("Centre modifié avec succès");
  }
}
