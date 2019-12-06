import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../Voiture';
@Pipe({
  name: 'recherchevoiture2'
})
export class Recherchevoiture2Pipe implements PipeTransform {

  transform(voitures:Voiture[],val:number):Voiture[]{
    if(!voitures||!val){
      return voitures;
    }
    else
    return voitures.filter(voiture =>voiture.prix< val);
  }

}
