import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerError = "";
  constructor(private router: Router , private service:Service) {
    this.registerForm = new FormGroup({
      nom: new FormControl("", [Validators.required]),
      prenom: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      telephone: new FormControl("", [Validators.required]),
      cin: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.required]),
      ville: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),
      groupe_sanguin: new FormControl("", [Validators.required]),
      repassword:new FormControl("", [Validators.required])
    });
  }

  ngOnInit() {}

  handleRegister() {


    if (this.registerForm.value.password!==this.registerForm.value.repassword ){
      Swal.fire({
        title: 'Erreur!',
        text: 'Vérifier votre mot de passe!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }else{


      let formObj = this.registerForm.getRawValue(); // {name: '', description: ''}

      let serializedForm = JSON.stringify(formObj);
  
     this.service.register(serializedForm).subscribe(
       (data:any)=>{
  
         if(data.msg==="success"){
  
           Swal.fire("Succès!", "Bienvenue dans notre plateforme", "success");
         
           this.router.navigate(['login']);
  
         
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
}
