import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-main-footer",
  templateUrl: "./main-footer.component.html",
  styleUrls: ["./main-footer.component.scss"],
})
export class MainFooterComponent implements OnInit {
  reclamationForm: FormGroup;
  constructor(private service:Service) {
    this.reclamationForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      message: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}




  submitReclamation() {
    let formObj = this.reclamationForm.getRawValue();
    
     

   this.service.ajouter_reclamation(formObj).subscribe(
    (data:any)=>{
 
      if(data){

        Swal.fire("Succès!", "Reclamation envoyé avec succés à l'administarteur de notre plateforme", "success");

     
       
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
