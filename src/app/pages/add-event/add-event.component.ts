import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { showSuccessAlert } from "src/app/lib/alerts";
import { centers } from "src/app/lib/dummy";
import { IUser } from "src/app/models/user";
import { Service } from "src/app/services/service";
import { getUser } from "src/app/utils/storage";
import Swal from "sweetalert2";

@Component({
  selector: "app-add-event",
  templateUrl: "./add-event.component.html",
  styleUrls: ["./add-event.component.scss"],
})
export class AddEventComponent implements OnInit {
  isEditable = true;
  eventInfo: FormGroup;
  responsableData: IUser = getUser();
  
  centerId = JSON.parse(localStorage.getItem('user')).id_centre 
  constructor(private router: Router , private service:Service) {
    this.eventInfo = new FormGroup({
      description: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
    
    });
  }

  ngOnInit(): void {}


  
  createEvent(){
   
    let event = this.eventInfo.getRawValue();
  
    event.id_centre = this.centerId;


    this.service.create_event(event).subscribe(
      (data:any)=>{
 
        if(data){
 
          Swal.fire("Succès!", "evenement crée avec succès", "success");
 
          
          this.router.navigateByUrl("/my-events");
        
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
