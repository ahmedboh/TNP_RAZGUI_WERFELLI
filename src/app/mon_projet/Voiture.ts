import { Caractéristique } from './Caractéristique';

export class Voiture{
    private _matricule:string;
    private _nom : string;
    private _photo : string ; 
    private _prix : number ; 
    private _assure : boolean;
    private _dateS : Date;
    private _marque : string;
    private _symbole : string ;
    private _table : Caractéristique;
    constructor(matricule : string , nom:string, photo:string, prix:number, assure:boolean, dateS:Date, marque:string, symbole:string, table: Caractéristique)
    {
this._matricule=matricule; 
this._nom=nom ; 
this._photo=photo;
this._prix=prix;
this._assure=assure;
this._dateS=dateS;
this._marque=marque;
this._symbole=symbole;
this._table=table;
}

public get matricule():string 
{ return this._matricule;}

public get nom():string 
{ return this._nom;}

public get photo():string 
{ return this._photo;}

public get prix():number
{ return this._prix;}

public get assure():boolean
{ return this._assure;}

public get dateS():Date
{ return this._dateS;}

public get marque():string 
{ return this._marque;}

public get symbole():string 
{ return this._symbole;}


public get table():Caractéristique
{ return this._table;}

}