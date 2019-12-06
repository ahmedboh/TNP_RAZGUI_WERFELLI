import { Injectable } from '@angular/core';
import { Voiture } from './Voiture';
import { Caractéristique } from './Caractéristique';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {
  voitures=[
    new Voiture( 'audi-2003', 'audi A1', '../assets/cars/audi.png',20970, true,new Date(2010,9,9),'audi','../assets/logo/audilogo.png',new Caractéristique('rouge',5,188)),
    new Voiture( 'bmw-1890', 'bmw x3', '../assets/cars/bmw.png',50000, false,new Date(2017,6,26),'bmw','../assets/logo/bmwlogo.png',new Caractéristique('noire',5,195)),
    new Voiture( 'polo-0078', 'polo 7', '../assets/cars/polo7.png',12980, true,new Date(2019,1,5),'volkswagen','../assets/logo/volkswagenlogo.png',new Caractéristique('marron',5,110)),
    new Voiture( 'mercedes-9550', 'mercedes benz gle 43 amg 2018', '../assets/cars/mercedes.png',87520, false,new Date(2018,6,18),'mercedes benz','../assets/logo/mercedeslogo.png',new Caractéristique('blanc',5,287))
  ];
  effacer(x:number){
      this.voitures.splice(x,1);
      }
  ajouter(a:string,b:string,c:string,d:number,e:boolean,f:Date,g:string,o:string,h:string,i:number,k:number ){
    this.voitures.push(new Voiture(a,b,c,d,e,f,g,o,new Caractéristique(h,i,k)));
  }
  rech(x:string):boolean{
    for(let v of this.voitures){
      if(x==v.matricule){
      return true;
      break;
      }
    }
    return false;

  }
 
  constructor() { }
}
