import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../Voiture';

@Pipe({
  name: 'recherchevoiture1'
})
export class Recherchevoiture1Pipe implements PipeTransform {

  transform(voitures:Voiture[],val:string):Voiture[]{
    if(!voitures||!val){
      return voitures;
    }
    else
    return voitures.filter(voiture =>voiture.nom.toLowerCase().indexOf(val.toLowerCase())!==-1);
  }

}
