export class Caractéristique{

    private _couleur : string ;
    private _nbrPlace : number;
    private _puissance : number ;
     constructor (couleur : string , nbrPlace:number , puissance : number){

        this._couleur=couleur;
        this._nbrPlace=nbrPlace;
        this._puissance=puissance;
     }
     public get couleur():string 
     {
         return this._couleur;
     }
     public get nbrPlace():number
     {
         return this._nbrPlace;
     }
     public get puissance():number
     {
         return this._puissance;
     }
     public set couleur(x:string){
        this._couleur=x;
    }
    public set nbrPlace(x:number){
        this._nbrPlace=x;
    }
    public set puissance(x:number){
        this._puissance=x;
    }
}