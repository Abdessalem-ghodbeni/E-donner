import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service {




 

private url:string='http://localhost:3008/api/';

constructor(private http:HttpClient){}



signin(user: any): Observable<any> {
  return this.http.post(this.url+'login' ,user );
}


register(user: any): Observable<any> {
    return this.http.post(this.url+'register' ,user );
  }
/** employe */


create_employe(employe: any ): Observable<any> {
  return this.http.post(this.url+'create_employe' ,employe );
}

create_demande(demande: any) {
  return this.http.post(this.url+'ajouter_demande' ,demande );
}

makeAppointement(rendezVous: any) {
  return this.http.post(this.url+'ajouter_rendezVous' ,rendezVous );
}

create_event(event: any) {
  return this.http.post(this.url+'create_event' ,event );
}


repondre_test_diabete(reponse: any) {
  return this.http.post(this.url+'repondre_test_diabete' ,reponse );
}


repondre_test_cancer(reponse: any) {
  return this.http.post(this.url+'repondre_test_cancer' ,reponse );
}


create_centre(data: any): Observable<any> {
    return this.http.post(this.url+'create_centre' ,data );
  }

  ajouterResponsable(data: any): Observable<any> {
    return this.http.post(this.url+'ajouterResponsable' ,data );
  }
  
  getAllCentres(): Observable<any> {
    return this.http.get(this.url+'getAllCentres');
  }
  

  deleteCentre(id:any): Observable<any> {
    return this.http.delete(this.url+'deleteCentre?id='+id);
  }


  deleteResponsable(id:any): Observable<any> {
    return this.http.delete(this.url+'deleteResponsable?id='+id);
  }


  archiverDemande(id:any): Observable<any> {
    return this.http.get(this.url+'archiverDemande?id='+id);
  }


  getAllCitoyens(): Observable<any> {
    return this.http.get(this.url+'getAllCitoyens');
  }

  getCentreById(id:any): Observable<any> {
    return this.http.get(this.url+'getCentreById?id='+id);
  }

  modify_Stock(stock:any): Observable<any> {
    return this.http.post(this.url+'modify_Stock', stock);
  }

  update_centre(centre:any): Observable<any> {
    return this.http.post(this.url+'update_centre', centre);
  }



  ajouter_reclamation(reclamation:any): Observable<any> {
    return this.http.post(this.url+'ajouter_reclamation', reclamation);
  }

  

  update_Responsable(user:any): Observable<any> {
    return this.http.post(this.url+'update_Responsable', user);
  }


  
    

  updateUser(user:any): Observable<any> {
    return this.http.post(this.url+'updateUser', user);
  }

  getStockSangByCentreId(id:any): Observable<any> {
    return this.http.get(this.url+'getStockSangByCentreId?id='+id);
  }


  getListDonnerByCenterId(id:any): Observable<any> {
    return this.http.get(this.url+'getListDonnerByCenterId?id='+id);
  }



  getListDonnationByCenterIdAndUserId(centreId:any , userId:any){
    return this.http.get(this.url+'getListDonnationByCenterIdAndUserId?centreId='+centreId+'&utilisateurId='+userId);
  }


  getListDonnationUserId(userId:any){
    return this.http.get(this.url+'getHistoriqueDonByUserId?id='+userId);
  }

  getBloodRequest(){
    return this.http.get(this.url+'getBloodRequest');
  }

  getMyBloodRequest(id:any){
    return this.http.get(this.url+'getMyBloodRequest?id='+id);
  }

  getAllEvenement(){
    return this.http.get(this.url+'getAllEvenement');
  }

  getAllReclamation(){
    return this.http.get(this.url+'getAllReclamation');
  }

  getResponsablesByCentreId(centreId:any) {
 
    return this.http.get(this.url+'getResponsablesByCentreId?id='+centreId);
  }

  getUserById(id:any) {
 
    return this.http.get(this.url+'getUserById?id='+id);
  }

  getRendezVousByCentreId(centerId: any) {
   
    return this.http.get(this.url+'getRendezVousByCentreId?id='+centerId);
  }

  getAcceptedRendezVousByCentreId(centerId: any) {
   
    return this.http.get(this.url+'getAcceptedRendezVousByCentreId?id='+centerId);
  }



  ajouterDiagnostic(id: any , diag:any ){
   
    return this.http.get(this.url+'ajouterDiagnostic?id='+id+"&diag="+diag);
  }
  getEvenementByCentreId(centerId: any) {
  
    return this.http.get(this.url+'getEvenementByCentreId?id='+centerId);
  }
 

  deleteEvenement(centerId: any) {
  
    return this.http.delete(this.url+'deleteEvenement?id='+centerId);
  }

  accepterRendezvous(rendezVousId: any) {
   
    return this.http.get(this.url+'accepterRendezvous?id='+rendezVousId);
  }
  

  refuserRendezvous(rendezVousId: any) {
   
    return this.http.get(this.url+'refuserRendezvous?id='+rendezVousId);
  }


  getRendezVousByUserId(userId: any) {
    return this.http.get(this.url+'getRendezVousByUserId?id='+userId);
  }


  isDonner(id:any): Observable<any> {
    return this.http.get(this.url+'isDonner?id='+id);
  }


  isNotDonner(id:any): Observable<any> {
    return this.http.get(this.url+'isNotDonner?id='+id);
  }


  getNombreDonnerByCentre(): Observable<any> {
    return this.http.get(this.url+'getNombreDonnerByCentre');
  }


  getNombreOfUsers(): Observable<any> {
    return this.http.get(this.url+'getNombreOfUsers');
  }

  getNombreOfCentres(): Observable<any> {
    return this.http.get(this.url+'getNombreOfCentres');
  }

  getStockSangByCentre(): Observable<any> {
    return this.http.get(this.url+'getStockSangByCentre');
  }
}
