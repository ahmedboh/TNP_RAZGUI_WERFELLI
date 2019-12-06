import { Component, OnInit } from '@angular/core';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-list-voitures',
  templateUrl: './list-voitures.component.html',
  styleUrls: ['./list-voitures.component.css']
})
export class ListVoituresComponent implements OnInit {
  titre:string=" voici notre inventaire Auto";
  tabvoitures;
  val:string;
  val2:number;
  constructor(private service :VoitureService) { }

  ngOnInit() {
    this.tabvoitures=this.service.voitures;
  }

}
