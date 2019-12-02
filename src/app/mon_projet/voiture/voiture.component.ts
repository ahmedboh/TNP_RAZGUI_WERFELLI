import { Component, OnInit, Input } from '@angular/core';
import { VoitureService } from '../voiture.service';
import { AuthService } from '../fireBase/auth.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
@Input()pos:number;
  tab;
  estUtilisatueur:boolean=false;
  constructor(private servicev: VoitureService,private serviceAuth:AuthService) { 
  }

  ngOnInit() {
    this.tab=this.servicev.voitures;
    this.serviceAuth.utilisateur.subscribe(result =>{
      this.estUtilisatueur=(result)?true:false;
      })
    
  }

  onEffacer(){
  this.servicev.effacer(this.pos);
  }
}
