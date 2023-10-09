import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { centers } from "src/app/lib/dummy";
import { IUser } from "src/app/models/user";
import { Service } from "src/app/services/service";
import { getUser } from "src/app/utils/storage";
import Swal from "sweetalert2";

import { UUID } from 'angular2-uuid';
@Component({
  selector: "app-add-responsable",
  templateUrl: "./add-responsable.component.html",
  styleUrls: ["./add-responsable.component.scss"],
})
export class AddResponsableComponent implements OnInit {
  isEditable = true;
  responsableInfo: FormGroup;
  centers = centers;
  connectedUser: IUser = getUser();
  constructor(private router: Router , private service:Service) {
    console.log({ user: this.connectedUser });
    this.responsableInfo = new FormGroup({
        nom: new FormControl("", [Validators.required]),
        prenom: new FormControl("", [Validators.required]),
        cin: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        telephone: new FormControl("", [Validators.required]),
        ville: new FormControl("", [Validators.required]),
   
    });
  }

  ngOnInit(): void {}
  
  generateUUID(){
    let uuidValue=UUID.UUID();
    return uuidValue.substring(0,8);
  }


  submit(){
   
    
    let responsable = this.responsableInfo.getRawValue();
    responsable.password = this.generateUUID();
    responsable.id_centre  = JSON.parse(localStorage.getItem('user')).id_centre 

   

    this.service.ajouterResponsable(responsable).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "vous avez crée un nouvelle responsable à ce centre avec succès", "success");
 
          
          this.router.navigateByUrl("/responsables");
        
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
