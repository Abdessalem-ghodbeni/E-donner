import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { users } from "src/app/lib/dummy";
import { Service } from "src/app/services/service";
import { login } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-questionnaireTwo",
  templateUrl: "./questionnaireTwo.component.html",
  styleUrls: ["./questionnaireTwo.component.scss"],
})
export class QuestionnaireTwoComponent implements OnInit, OnDestroy {
  questionnaireForm: FormGroup;

  constructor(private router: Router , private service:Service) {
    this.questionnaireForm = new FormGroup({
      age: new FormControl("", []),
      modificationMamelon: new FormControl("", []),
      masseDure: new FormControl("", []),

      ganglionsGonflé: new FormControl("", []),
      antecedentsFamiliaux: new FormControl("", []),
      encientePremierefois: new FormControl("", []),

      faiblesse: new FormControl("", []),
      accumulationPoumons: new FormControl("", []),
     
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}

  repondre(){

    
 

    let formObj = this.questionnaireForm.getRawValue(); 
    this.service.repondre_test_cancer(formObj).subscribe(
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

    if (formObj.modificationMamelon==='oui'  || formObj.masseDure==='oui'||  formObj.ganglionsGonflé==='oui'||  formObj.antecedentsFamiliaux==='oui'||
    formObj.accumulationPoumons==='oui'){
    
      Swal.fire("ALERT!", "Suite à ce diagnostic , il y a un grand risque tu as un cancer de sein,  il faut aller immédiatement consulter un médecin spécialiste ", "error");

      this.repondre()
    }else{
      Swal.fire("SAFE!", "Le risque de tomber malade est trè faible ", "success");
      this.repondre()
    }

   


  
   
  }
}