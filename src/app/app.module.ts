import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListVoituresComponent } from './mon_projet/list-voitures/list-voitures.component';
import { VoitureComponent } from './mon_projet/voiture/voiture.component';
import { AcceuilComponent } from './mon_projet/acceuil/acceuil.component';
import { AjoutVoitureComponent } from './mon_projet/ajout-voiture/ajout-voiture.component';
import { AuthentfierComponent } from './mon_projet/authentfier/authentfier.component';
import { MenuComponent } from './mon_projet/menu/menu.component';
import { EuroPipe } from './mon_projet/euro.pipe';
import { ErreurComponent } from './mon_projet/erreur/erreur.component';
import { SinscrireComponent } from './mon_projet/sinscrire/sinscrire.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
