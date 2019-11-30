import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  utilisateur:Observable<firebase.User>

  constructor(private fireauth:AngularFireAuth) {
    this.utilisateur=fireauth.user;
   }



  sinscrire(email,motdepasse){
    return this.fireauth.auth.createUserWithEmailAndPassword(email,motdepasse);
  }
  connecter(email,motdepasse){
    return this.fireauth.auth.signInWithEmailAndPassword(email,motdepasse);
  }
  deconnecter(){
    return this.fireauth.auth.signOut();
  } 
}
