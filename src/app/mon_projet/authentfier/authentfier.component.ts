import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentfier',
  templateUrl: './authentfier.component.html',
  styleUrls: ['./authentfier.component.css']
})
export class AuthentfierComponent implements OnInit {
 email;mtp;
 errors:boolean=true;
 message:string;
 emailParDefaut="user@user.xx";
 motpassParDefaut="user000user";

  constructor(private rt:Router) { }

  ngOnInit() {
  }
 onSinscrire(f:NgForm){
     this.errors=false;
     if(f.value.email==this.emailParDefaut && f.value.mtp==this.motpassParDefaut){
      this.rt.navigate(['/Acceuil']);
       }else{
        this.message="votre authentification et passer avec des echec";
     }
 }
}
