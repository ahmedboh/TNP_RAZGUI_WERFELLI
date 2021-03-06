import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVoituresComponent } from './mon_projet/list-voitures/list-voitures.component';
import { AcceuilComponent } from './mon_projet/acceuil/acceuil.component';
import { VoitureComponent } from './mon_projet/voiture/voiture.component';
import { AjoutVoitureComponent } from './mon_projet/ajout-voiture/ajout-voiture.component';
import { AuthentfierComponent } from './mon_projet/authentfier/authentfier.component';
import { ErreurComponent } from './mon_projet/erreur/erreur.component';
import { SinscrireComponent } from './mon_projet/sinscrire/sinscrire.component';
import { DetailComponent } from './mon_projet/detail/detail.component';
import { EditerComponent } from './mon_projet/editer/editer.component';
const routes: Routes = [
  {path : 'Acceuil', component: AcceuilComponent},
  {path: 'ListeVoiture',component:ListVoituresComponent},
  {path : 'AjoutVoiture', component:AjoutVoitureComponent },
  {path : 'Authentfier', component: AuthentfierComponent},
  {path : 'Sinscrire', component: SinscrireComponent},
  {path : 'ListeVoiture/detail/:matricule', component:  DetailComponent},
  {path : 'ListeVoiture/editer/:matricule', component: EditerComponent},
  {path : '', redirectTo:'Acceuil' , pathMatch:'full'},
  {path : '**', component:ErreurComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
