import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../fireBase/auth.service';
import { UtilisateurService } from '../fireBase/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent implements OnInit {
  nom;prenom;email;mtp;cmtp;adresse;
  message:string;
  errors:boolean=true;
  constructor(private serviceAuth:AuthService,private serviceUtil:UtilisateurService,private rt:Router) { }

  ngOnInit() {
  }
  onSinscrire(f:NgForm){
    this.serviceAuth.sinscrire(f.value.email,f.value.mtp)
    .then(resultat => {

      this.message="";

      this.serviceUtil.ajouterNouveauUtlisateur(resultat.user.uid,f.value.nom,f.value.prenom,f.value.adresse)
    .then(() =>this.rt.navigate(['/Acceuil']))

    })
    .catch(errRseult=>this.message="echek!! de creation de compte :votre email est utlisse par un autre utlisateur");
   
}
}

