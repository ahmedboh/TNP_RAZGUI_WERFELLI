import { Component, OnInit, Input } from '@angular/core';
import { VoitureService } from '../voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
@Input()pos:number;
  tab;
  constructor(private service: VoitureService) { 
  }

  ngOnInit() {
    this.tab=this.service.voitures;
  }

}
