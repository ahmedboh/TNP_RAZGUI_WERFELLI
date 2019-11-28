import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-authentfier',
  templateUrl: './authentfier.component.html',
  styleUrls: ['./authentfier.component.css']
})
export class AuthentfierComponent implements OnInit {
 nom;prenom;email;mtp;cmtp;adresse;
  constructor() { }

  ngOnInit() {
  }
 onSinscrire(f:NgForm){
     console.log("aaaaa");
 }
}
