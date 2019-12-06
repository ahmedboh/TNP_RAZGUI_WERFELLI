import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ajout-voiture',
  templateUrl: './ajout-voiture.component.html',
  styleUrls: ['./ajout-voiture.component.css']
})
export class AjoutVoitureComponent implements OnInit {
matricule;nom;dateS;nbrPlace;marque;symbole;prix;photo:string;color;puissance;
assure='true';


  constructor(private serviceVoi:VoitureService,private rt:Router) { }
   
  test(x:string):boolean{
    return this.serviceVoi.rech(this.matricule);
  }
onAjouter(f:NgForm){
let ass:boolean=(f.value['assure']=='true')?true:false;
let lien1="../assets/cars"+this.photo.substring(this.photo.lastIndexOf("\\",this.photo.length),this.photo.length);
let lien2="../assets/logo"+this.symbole.substring(this.symbole.lastIndexOf("\\",this.symbole.length),this.symbole.length);
this.serviceVoi.ajouter(this.matricule,this.nom,lien1,this.prix,ass,this.dateS,this.marque,lien2,this.color,this.nbrPlace,this.puissance); 
this.rt.navigate(['/ListeVoiture']);

} 
  ngOnInit() {
  }

}
