import { Component, OnInit, Input } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { AuthService } from '../fireBase/auth.service';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
@Input()pos:number;
  tab;
  achat:boolean;
  estUtilisatueur:boolean=false;
  constructor(private servicev: VoitureService,private serviceAuth:AuthService,private commande:CommandeService) { 
  }

  ngOnInit() {
    this.tab=this.servicev.voitures;
    this.serviceAuth.utilisateur.subscribe(result =>{
      this.estUtilisatueur=(result)?true:false;
      this.achat=this.commande.rech(this.tab[this.pos].matricule);
      })
    
  }

  onAcheter(){
    
    if(this.achat){
      this.commande.suprimer(this.tab[this.pos].matricule);

    }else{ 
      this.commande.ajouter(this.tab[this.pos].matricule,this.tab[this.pos].nom,this.tab[this.pos].photo,this.tab[this.pos].prix);
    } 
    this.achat=this.commande.rech(this.tab[this.pos].matricule);
    }
  onEffacer(){
  this.servicev.effacer(this.pos);
  }
}
