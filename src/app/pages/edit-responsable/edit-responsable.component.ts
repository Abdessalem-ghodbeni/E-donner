import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { showSuccessAlert } from "src/app/lib/alerts";
import { centers, responsables } from "src/app/lib/dummy";
import { IResponsable } from "src/app/models/user";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-edit-responsable",
  templateUrl: "./edit-responsable.component.html",
  styleUrls: ["./edit-responsable.component.scss"],
})
export class EditResponsableComponent implements OnInit {
  isEditable = true;
  responsableInfo: FormGroup;
  centers = centers;
  responsableId: number;

  constructor(private activatedRouter: ActivatedRoute, private router: Router,  private service:Service) {
    this.responsableId = Number(this.activatedRouter.snapshot.params.id);
    //get center by id
    
    this.responsableInfo = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      cin: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {

    this.getResponsableById ( this.responsableId )
  }

  getResponsableById(responsableId){
    this.service.getUserById(responsableId).subscribe(
      (data: any) => {
        if (data !== undefined) {
          this.responsableInfo.patchValue({
            nom: data.nom,
            prenom: data.prenom,
            ville: data.ville,
            cin: data.cin ,
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

  submit() {
    

    let responsable = this.responsableInfo.getRawValue();
    responsable.id = this.responsableId;

 

    this.service.update_Responsable(responsable).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "modification avec succès", "success");
          this.router.navigate(["/responsables"]);
 
        
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
