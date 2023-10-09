import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-check-form",
  templateUrl: "./check-form.component.html",
  styleUrls: ["./check-form.component.scss"],
})
export class CheckFormComponent implements OnInit {
  isEditable = true;
  formStep1: FormGroup;
  formStep2: FormGroup;
  formStep3: FormGroup;
  formStep4: FormGroup;
  formStep5: FormGroup;
  formStep6: FormGroup;
  userId = JSON.parse(localStorage.getItem('user')).id 
  constructor(private service:Service,
    public dialogRef: MatDialogRef<CheckFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.formStep1 = new FormGroup({
      gender: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      weight: new FormControl("", [Validators.required]),
      lastDate: new FormControl("", [Validators.required]),
    });
    this.formStep2 = new FormGroup({
      maladies: new FormControl("", [Validators.required]),
      cancer: new FormControl("", [Validators.required]),
      chronique: new FormControl("", [Validators.required]),
      avc: new FormControl("", [Validators.required]),
      transfusion: new FormControl("", [Validators.required]),
    });
    this.formStep3 = new FormGroup({
      usage: new FormControl("", [Validators.required]),
      piercing: new FormControl("", [Validators.required]),
      secualLife: new FormControl("", [Validators.required]),
    });
    this.formStep4 = new FormGroup({
      anemia: new FormControl("", [Validators.required]),
      examens: new FormControl("", [Validators.required]),
      operations: new FormControl("", [Validators.required]),
    });
    this.formStep5 = new FormGroup({
      uk: new FormControl("", [Validators.required]),
      travel: new FormControl("", [Validators.required]),
    });
    this.formStep6 = new FormGroup({
      fever: new FormControl("", [Validators.required]),
      teeth: new FormControl("", [Validators.required]),
      medications: new FormControl("", [Validators.required]),
    });
  }
  ngOnInit(): void {}
  get formStepControl1() {
    return this.formStep1.controls;
  }
  get formStepControl2() {
    return this.formStep2.controls;
  }
  get formStepControl3() {
    return this.formStep3.controls;
  }
  get formStepControl4() {
    return this.formStep4.controls;
  }
  get formStepControl5() {
    return this.formStep5.controls;
  }
  get formStepControl6() {
    return this.formStep6.controls;
  }
  get formsData() {
    return {
      ...this.formStep1.value,
      ...this.formStep2.value,
      ...this.formStep3.value,
      ...this.formStep4.value,
      ...this.formStep5.value,
      ...this.formStep6.value,
    };
  }
  confirm() {
   
    if (this.formStep2.value.cancer==='oui' || this.formStep2.value.chronique==='oui'||  this.formStep2.value.avc==='oui'||  this.formStep2.value.transfusion==='oui'||
    this.formStep4.value.anemia==='oui'|| this.formStep4.value.examens==='oui'||  this.formStep4.value.operations==='oui'||
    this.formStep6.value.fever==='oui'||
    this.formStep6.value.medications==='oui' ){
      this.isNotDonner()
    }else{
      this.isDonner()
    }



  }


  isDonner(){

    this.service.isDonner(this.userId).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "Suite à ce test Vous pouvez etre un donner , et fixer un rendez-vous à tout moment ", "success");
         
 
        
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
  isNotDonner(){

    this.service.isNotDonner(this.userId).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Erreur!", "Suite à ce test,  vous ne pouvez pas prendre un rendez de don", "error");
          
 
        
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
