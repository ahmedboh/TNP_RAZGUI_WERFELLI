import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../fireBase/auth.service';

@Component({
  selector: 'app-authentfier',
  templateUrl: './authentfier.component.html',
  styleUrls: ['./authentfier.component.css']
})
export class AuthentfierComponent implements OnInit {
 email;mtp;
 hiden:boolean;
 message:string;

  constructor(private rt:Router,private serviceAuth:AuthService) { }

  ngOnInit() {
  }
 onSeConnecter(f:NgForm){

     this.serviceAuth.connecter(f.value.email,f.value.mtp)
     .then(reslult =>{
      this.rt.navigate(['/Acceuil']);
      this.message="";               
     })
     .catch(err=>{
       this.hiden= false;   
      this.message="votre authentification et passer avec des echec";
    })
 }
 hide(){
 
   this.hiden=true;
 }
}
