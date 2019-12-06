import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Voiture } from '../Voiture';

@Component({
  selector: 'app-editer',
  templateUrl: './editer.component.html',
  styleUrls: ['./editer.component.css']
})
export class EditerComponent implements OnInit {
  matricule;
  nom;dateS:Date;nbrPlace;marque;symbole;prix;photo:string;color;puissance;
assure='true'; 
  tabv;
  vo:Voiture;

  recherche_voiture()
  {
   for (let v of this.tabv )
   {
     if (this.matricule==v.matricule)
     this.vo=v;
  
   }
  }

  constructor(private serviceVoi:VoitureService,private rt :ActivatedRoute,private rot:Router) { }

  ngOnInit() {
  
    this.matricule=this.rt.snapshot.params['matricule'];
    this.tabv=this.serviceVoi.voitures;
    this.recherche_voiture();
    this.nom=this.vo.nom;
    let daate=this.vo.dateS;
    //this.dateS.setFullYear(daate.getFullYear(),daate.getMonth(),daate.getDate()); 
    this.dateS=new Date(daate.getFullYear(),daate.getMonth(),daate.getDate()) ;
    this.nbrPlace=this.vo.table.nbrPlace;
    this.marque=this.vo.marque;
    this.symbole=this.vo.symbole;
    this.color=this.vo.table.couleur;
    this.puissance=this.vo.table.puissance;
    this.prix=this.vo.prix;
    this.photo=this.vo.photo;
    this.assure=(this.vo.assure)?'true':'false';
  }
  onModifier(f:NgForm){
    this.vo.nom=this.nom;
    this.vo.dateS=this.dateS
    this.vo.table.nbrPlace=this.nbrPlace;
    this.vo.marque=this.marque;
    this.vo.table.couleur=this.color;
    this.vo.table.puissance=this.puissance;
    this.vo.prix=this.prix;
    //----------------------------------------
    let lien1;
   if(this.photo.indexOf('\\',0)!=-1)
     lien1="../assets/cars"+this.photo.substring(this.photo.lastIndexOf("\\",this.photo.length),this.photo.length);
   else
    lien1="../assets/cars"+this.photo.substring(this.photo.lastIndexOf("/",this.photo.length),this.photo.length);
   this.vo.photo=lien1;
   //----------------------------------------
   let lien2;
   if(this.symbole.indexOf('\\',0)!=-1)
     lien2="../assets/logo"+this.symbole.substring(this.symbole.lastIndexOf("\\",this.symbole.length),this.symbole.length);
   else
    lien2="../assets/logo"+this.symbole.substring(this.symbole.lastIndexOf("/",this.symbole.length),this.symbole.length);
   this.vo.symbole=lien2;
   //---------------------------------
   let ass:boolean=(f.value['assure']=='true')?true:false;
   this.vo.assure=ass;
   this.rot.navigate(['/ListeVoiture']);
    
  }

  onAjouter(f:NgForm){
    let ass:boolean=(f.value['assure']=='true')?true:false;
    let lien1="../assets/cars"+this.photo.substring(this.photo.lastIndexOf("\\",this.photo.length),this.photo.length);
    let lien2="../assets/logo"+this.symbole.substring(this.symbole.lastIndexOf("\\",this.symbole.length),this.symbole.length);
    this.serviceVoi.ajouter(this.matricule,this.nom,lien1,this.prix,ass,this.dateS,this.marque,lien2,this.color,this.nbrPlace,this.puissance); 
    this.rot.navigate(['/ListeVoiture']);
    
    } 

}
