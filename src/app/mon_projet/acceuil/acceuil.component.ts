import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../commande.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 commandes;
 val;val1;val2;
  constructor(private servicecomm:CommandeService) { }

  ngOnInit() {
    this.commandes=this.servicecomm.tabCommandes;
  }
  onCalcul(){
    this.val=0;
    for(let c of this.commandes ){
      this.val+=c.prix;
    }
    let pourcetagedureduction:number;
    switch(this.commandes.length){
      case 2:pourcetagedureduction=0;
             break;
      case 3:pourcetagedureduction=10;
            break; 
      case 4:pourcetagedureduction=15;
            break;
      default :pourcetagedureduction=20;
      break;
    }
    this.val1=pourcetagedureduction+"%";
    this.val2=this.val-(this.val*pourcetagedureduction/100);
  }
}
