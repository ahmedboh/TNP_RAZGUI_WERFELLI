export class Commande{

    private _matricule:string;
    private _nom : string;
    private _photo : string ; 
    private _prix : number ;
    
    constructor(matricule : string , nom:string, photo:string, prix:number){
      this._matricule=matricule; 
      this._nom=nom ; 
      this._photo=photo;
       this._prix=prix;
    }

public get matricule():string 
{ return this._matricule;}

public get nom():string 
{ return this._nom;}

public get photo():string 
{ return this._photo;}

public get prix():number
{ return this._prix;}



}