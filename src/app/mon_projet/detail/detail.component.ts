import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  matricule:string ; 
tabv;
vo;
recherche_voiture()
{
 for (let v of this.tabv )
 {
   if (this.matricule==v.matricule)
   this.vo=v;

 }
}

  constructor(private voitureservice:VoitureService,private rt:ActivatedRoute) { }

  ngOnInit() {
    this.matricule=this.rt.snapshot.params['matricule'];
    this.tabv=this.voitureservice.voitures;
    this.recherche_voiture();
  }

}
