import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";
import { UUID } from 'angular2-uuid';

@Component({
  selector: "app-add-center",
  templateUrl: "./add-center.component.html",
  styleUrls: ["./add-center.component.scss"],
})
export class AddCenterComponent implements OnInit {
  isEditable = true;
  centerInfo: FormGroup;
  responsableInfo: FormGroup;
  constructor(private router: Router , private service:Service) {}

  ngOnInit(): void {
    this.centerInfo = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      addresse : new FormControl("", [Validators.required]),
      telephone : new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
    });
    this.responsableInfo = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      cin: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required]),
      telephone: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
    });
  }


  generateUUID(){
    let uuidValue=UUID.UUID();
    return uuidValue.substring(0,8);
  }


  submit(){
   
    let centre = this.centerInfo.getRawValue();
    let responsable = this.responsableInfo.getRawValue();
    responsable.password = this.generateUUID();

    let data ={
      responsable: responsable,
      centre : centre
    }

    this.service.create_centre(data).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "vous avez crée un nouveau centre avec succès", "success");
 
          
          this.router.navigateByUrl("/centers");
        
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
