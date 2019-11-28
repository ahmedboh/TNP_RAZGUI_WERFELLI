import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-list-voitures',
  templateUrl: './list-voitures.component.html',
  styleUrls: ['./list-voitures.component.css']
})
export class ListVoituresComponent implements OnInit {
  titre:string="voici mes derniere offres";
  tabvoitures;
  constructor(private service :VoitureService) { }

  ngOnInit() {
    this.tabvoitures=this.service.voitures;
  }

}
