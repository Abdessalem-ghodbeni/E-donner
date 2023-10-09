import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Service } from "src/app/services/service";
import Swal from "sweetalert2";

@Component({
  selector: "app-appointment-modal",
  templateUrl: "./appointment-modal.component.html",
  styleUrls: ["./appointment-modal.component.scss"],
})
export class AppointmentModalComponent implements OnInit {
  appointmentForm: FormGroup;
  minDate: Date = new Date();
  userId = JSON.parse(localStorage.getItem('user')).id 
  bloodType = JSON.parse(localStorage.getItem('user')).groupe_sanguin? JSON.parse(localStorage.getItem('user')).groupe_sanguin:""
  constructor(private service:Service,
    public dialogRef: MatDialogRef<AppointmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.appointmentForm = new FormGroup({
      bloodGroup: new FormControl(this.bloodType, []),
      date: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {}
  cancel() {}

  confirmer(){


    let details= {
      "date":this.appointmentForm.value.date.substring(0,9),
       "id_centre": this.data.centerId,
       "id_utilisateur": this.userId
      
     }
   
     

   this.service.makeAppointement(details).subscribe(
    (data:any)=>{
 
      if(data){

        Swal.fire("Succès!", "Rendez-vous enregistré avec succès! ", "success");

        this.dialogRef.close();

       
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
