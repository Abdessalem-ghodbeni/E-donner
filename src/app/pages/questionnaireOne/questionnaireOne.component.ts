import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { users } from "src/app/lib/dummy";
import { Service } from "src/app/services/service";
import { login } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-questionnaireOne",
  templateUrl: "./questionnaireOne.component.html",
  styleUrls: ["./questionnaireOne.component.scss"],
})
export class QuestionnaireOneComponent implements OnInit, OnDestroy {
  questionnaireForm: FormGroup;

  constructor(private router: Router , private service:Service) {
    this.questionnaireForm = new FormGroup({
      age: new FormControl("", []),
      isfamilleDiabete: new FormControl("", []),
      faimConstante: new FormControl("", []),

      diminuationPoids: new FormControl("", []),
      besoinUriner: new FormControl("", []),
      soifConstante: new FormControl("", []),

      sexe: new FormControl("", []),
      cholestériol: new FormControl("", []),
      grossesseDiabete: new FormControl("", []),
      bebe9kg: new FormControl("", []),
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}

  repondre(){
    
    let formObj = this.questionnaireForm.getRawValue(); 
    this.service.repondre_test_diabete(formObj).subscribe(
      (data:any)=>{
 
        if(data.msg==="success"){
 
        
 
          this.router.navigateByUrl("");
        
        } else{
         Swal.fire({
           title: 'Erreur!',
           text: 'Vérifier votre informations, essayez une autre fois!',
           icon: 'error',
           confirmButtonText: 'OK'
         })
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
  submit() {


    let formObj = this.questionnaireForm.getRawValue(); 

    if (formObj.isfamilleDiabete==='oui' && (formObj.faimConstante==='oui'||  formObj.besoinUriner==='oui'||  formObj.soifConstante==='oui'||
    formObj.grossesseDiabete==='oui')){
    
      Swal.fire("ALERT!", "Suite à ce diagnostic , il y a un grand risque de tomber malade,  il faut aller immédiatement consulter un médecin spécialiste du diabète ", "error");

      this.repondre()
    }else{
      Swal.fire("SAFE!", "Le risque de tomber malade est trè faible ", "success");

      this.repondre()
    }

   
  }
}
