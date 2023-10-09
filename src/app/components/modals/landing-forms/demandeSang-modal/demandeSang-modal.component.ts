import { Component, Input, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-form-modal",
  templateUrl: "./demandeSang-modal.component.html",
  styleUrls: ["./demandeSang-modal.component.scss"],
})
export class DemandeSangModalComponent implements OnInit {
  form: FormGroup;
  userId = JSON.parse(localStorage.getItem('user')).id 

  @Input() public centerId;
  constructor(private service:Service , private dialogRef: MatDialog ) {
    this.form = new FormGroup({
      groupe_sanguin: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  cancel() {}
  confirmer(){

    let formObj = this.form.getRawValue();
     formObj.id_centre = this.centerId;
     formObj.id_utilisateur = this.userId;
     

   this.service.create_demande(formObj).subscribe(
    (data:any)=>{
 
      if(data){

        Swal.fire("Succès!", "Demande enregistré avec succès! une notification sera envoyé à tous les donneurs de notre plateforme", "success");

        this.dialogRef.closeAll();

       
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

