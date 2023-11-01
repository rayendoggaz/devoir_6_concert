import { Categorie } from "./categorie.model";

export class concert{
    idconcert! : number;
    nomconcert? : string;
    prixconcert? : number;
    dateCreation? : Date;
    categorie! : Categorie;
}