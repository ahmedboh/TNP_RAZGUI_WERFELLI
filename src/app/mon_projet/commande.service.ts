import { Injectable } from '@angular/core';
import { Commande } from './commande';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  tabCommandes:Commande[]=[
    new Commande("","","",0)
  ];
  
  ajouter(a:string,b:string,c:string,d:number){
    this.tabCommandes.push(new Commande(a,b,c,d));
  }
  suprimer(x:string){
    for(let i=0;i<this.tabCommandes.length;i++){
      if(x==this.tabCommandes[i].matricule)
       this.tabCommandes.splice(i,1);
    }
  }
  rech(x:string):boolean{
    for(let v of this.tabCommandes){
      if(x==v.matricule){
      return true;
      break;
      }
    }
    return false;

  }
 
  constructor() { }
}
