import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//fire-base
import{ AngularFireModule }from '@angular/fire';
import{AngularFirestoreModule, FirestoreSettingsToken}from'@angular/fire/firestore';
import{AngularFireAuthModule}from'@angular/fire/auth';

import { ListVoituresComponent } from './mon_projet/list-voitures/list-voitures.component';
import { VoitureComponent } from './mon_projet/voiture/voiture.component';
import { AcceuilComponent } from './mon_projet/acceuil/acceuil.component';
import { AjoutVoitureComponent } from './mon_projet/ajout-voiture/ajout-voiture.component';
import { AuthentfierComponent } from './mon_projet/authentfier/authentfier.component';
import { MenuComponent } from './mon_projet/menu/menu.component';
import { EuroPipe } from './mon_projet/euro.pipe';
import { ErreurComponent } from './mon_projet/erreur/erreur.component';
import { SinscrireComponent } from './mon_projet/sinscrire/sinscrire.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListVoituresComponent,
    VoitureComponent,
    AcceuilComponent,
    AjoutVoitureComponent,
    AuthentfierComponent,
    MenuComponent,
    EuroPipe,
    ErreurComponent,
    SinscrireComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyC1kF1oyO5Q87PT-ZZGax0NBFOqtyNygVI",
        authDomain: "auto-38488.firebaseapp.com",
        databaseURL: "https://auto-38488.firebaseio.com",
        projectId: "auto-38488",
        storageBucket: "auto-38488.appspot.com",
        messagingSenderId: "906369951981",
        appId: "1:906369951981:web:634fd7a35d0930f87384e4"
      }
    ),
    AngularFirestoreModule,
    AngularFireAuthModule  
  ],
  providers: [
    {provide :FirestoreSettingsToken,useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
