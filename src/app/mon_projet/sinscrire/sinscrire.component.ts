import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.css']
})
export class SinscrireComponent implements OnInit {
  nom;prenom;email;mtp;cmtp;adresse;
  errors:boolean=true;
  constructor() { }

  ngOnInit() {
  }
  onSinscrire(f:NgForm){
    this.errors=false;
}
}

