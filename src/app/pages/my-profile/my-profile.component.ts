import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Service } from 'src/app/services/service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user=JSON.parse(localStorage.getItem('user'))
  info: FormGroup;
  constructor(private service:Service) { 


    this.info = new FormGroup({
      nom: new FormControl(this.user.nom, [Validators.required]),
      prenom: new FormControl(this.user.prenom, [Validators.required]),
      email: new FormControl(this.user.email, []),
      telephone: new FormControl(this.user.telephone, [Validators.required]),
      cin: new FormControl(this.user.cin, [Validators.required]),
      age: new FormControl(this.user.age, [Validators.required]),
      ville: new FormControl(this.user.ville, [Validators.required]),
    
     
    });
  }

  ngOnInit(): void {
  }


  getUserById(id){


    
    this.service.getUserById(id).subscribe(
      (data:any)=>{
 
        if(data){

         localStorage.setItem('user', JSON.stringify(data))
         this.info.patchValue({
          nom: data.nom,
          prenom: data.prenom ,
          telephone : data.telephone ,
          email : data.email ,
          cin: data.cin ,
          age: data.age ,
          ville:data.ville ,

        });
        
        } 
      },err=>{
         console.log("error"+err)
      });
  }
  
  submit() {
    const data = { ...this.info.value, id: this.user.id };
    console.log({ data });

    this.service.updateUser(data).subscribe(
      (data:any)=>{
 
        if(data.msg==="success"){
 
          this.getUserById(this.user.id)
          Swal.fire("Succès!", "Bienvenue dans notre plateforme", "success");
        
        
 
        
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
