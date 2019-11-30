import { Component, OnInit } from '@angular/core';
import { AuthService } from '../fireBase/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  estUtilisatueur:boolean=false; 


  constructor(private serviceAuth:AuthService,private router:Router) { }

  ngOnInit() {
    this.serviceAuth.utilisateur.subscribe(result =>{
    this.estUtilisatueur=(result)?true:false;
    })
  }


  onDeconnecter(){
    this.serviceAuth.deconnecter()
    .then(resultat => this.router.navigate(['/Authentfier']) )
  }
}
