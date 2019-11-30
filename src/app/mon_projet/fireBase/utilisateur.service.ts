import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {


  constructor(private fs:AngularFirestore) { }

  ajouterNouveauUtlisateur(id,nom:string,prenom:string,adresse:string){
    return this.fs.doc('users/'+id).set({
      //nom :nom; =>nom;
      nom,
      prenom,
      adresse,
    });
  }

}
