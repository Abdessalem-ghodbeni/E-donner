import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { users } from "src/app/lib/dummy";
import { Service } from "src/app/services/service";
import { login } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  loginError = "";
  constructor(private router: Router , private service:Service) {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {}
  ngOnDestroy() {}
  handleLogin() {


    let formObj = this.loginForm.getRawValue(); // {name: '', description: ''}

    let serializedForm = JSON.stringify(formObj);

   this.service.signin(serializedForm).subscribe(
     (data:any)=>{

       if(data.status===200){

         Swal.fire("Succès!", "Bienvenue dans votre espace", "success");

         let user = data.member
         delete user.password;
         localStorage.setItem("user", JSON.stringify(user))
         this.router.navigateByUrl("/my-profile");
       
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
}
