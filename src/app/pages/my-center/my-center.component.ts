import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { showSuccessAlert } from "src/app/lib/alerts";
import { centers } from "src/app/lib/dummy";
import { ICenter } from "src/app/models/center";
import { IUser } from "src/app/models/user";
import { Service } from "src/app/services/service";
import { getUser } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-my-center",
  templateUrl: "./my-center.component.html",
  styleUrls: ["./my-center.component.scss"],
})
export class MyCenterComponent implements OnInit {
  centerInfo: FormGroup;
 idCentre :any
  constructor(private router: Router ,  private service:Service) {
    //get responsable center data
   /*  const center: ICenter = centers.find(
      (center) => center.name === this.responsableData.center
    );
    if (!center) this.router.navigateByUrl("unauthorized"); */
    this.centerInfo = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      addresse : new FormControl("", [Validators.required]),
      telephone : new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    });
  
  }

  ngOnInit(): void {

    this.idCentre = JSON.parse(localStorage.getItem('user')).id_centre 
    this.getCentreById ()
  }

  submit() {
    

    let centre = this.centerInfo.getRawValue();
    centre.id =  this.idCentre;

 

    this.service.update_centre(centre).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "modification avec succès", "success");
          this.getCentreById ()
 
        
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
 

  getCentreById(){

    this.service.getCentreById(this.idCentre).subscribe(
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
}

