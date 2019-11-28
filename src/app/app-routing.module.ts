import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListVoituresComponent } from './mon_projet/list-voitures/list-voitures.component';
import { AcceuilComponent } from './mon_projet/acceuil/acceuil.component';
import { VoitureComponent } from './mon_projet/voiture/voiture.component';
import { AjoutVoitureComponent } from './mon_projet/ajout-voiture/ajout-voiture.component';
import { AuthentfierComponent } from './mon_projet/authentfier/authentfier.component';
import { ErreurComponent } from './mon_projet/erreur/erreur.component';

const routes: Routes = [
  {path : 'Acceuil', component: AcceuilComponent},
  {path: 'ListeVoiture',component:ListVoituresComponent},
  {path : 'AjoutVoiture', component:AjoutVoitureComponent },
  {path : 'Authentfier', component: AuthentfierComponent},
  {path : '', redirectTo:'Acceuil' , pathMatch:'full'},
  {path : '**', component:ErreurComponent}
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
