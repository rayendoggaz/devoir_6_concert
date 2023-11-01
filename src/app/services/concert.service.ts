import { Injectable } from '@angular/core';
import { concert } from '../model/concert.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class concertService {

  concerts : concert[];
  concert! : concert;
  categories! : Categorie[];

  constructor() { 

    this.categories = [ {idCat : 1, nomCat : "stadium"},
                        {idCat : 2, nomCat : "venue"}];

    this.concerts = [
      { idconcert: 1, nomconcert: "THE ERAS TOUR", prixconcert: 800, dateCreation: new Date("01/14/2022"), categorie : {idCat : 1, nomCat : "stadium"}}, 
      { idconcert: 2, nomconcert: "GUTS TOUR", prixconcert: 450, dateCreation: new Date("12/17/2021"), categorie : {idCat : 1, nomCat : "stadium"} },
      { idconcert: 3, nomconcert: "SOUR TOUR", prixconcert: 500, dateCreation: new Date("02/20/2020"), categorie : {idCat : 1, nomCat : "venue"} }
    ];
  }

  listeconcerts():concert[] {
    return this.concerts;
  }
  
  ajouterconcert( prod: concert){
    this.concerts.push(prod);
  }

  supprimerconcert( prod: concert){
    //supprimer le concert prod du tableau concerts
    const index = this.concerts.indexOf(prod, 0);
    if (index > -1) {
    this.concerts.splice(index, 1);
    }
    //ou Bien
    /* this.concerts.forEach((cur, index) => {
    if(prod.idconcert === cur.idconcert) {
    this.concerts.splice(index, 1);
    }
    }); */
    }


    consulterconcert(id:number): concert{
      return this.concerts.find(p => p.idconcert == id)!;
          
      }

      trierconcerts(){
        this.concerts = this.concerts.sort((n1,n2) => {
          if (n1.idconcert > n2.idconcert) {
              return 1;
          }
         if (n1.idconcert < n2.idconcert) {
              return -1;
          }
        return 0;
      });
      }
  

      updateconcert(p:concert)
      {
      // console.log(p);
        this.supprimerconcert(p);
        this.ajouterconcert(p);
        this.trierconcerts();
      }

      listeCategories():Categorie[] {
        return this.categories;
      }
        
      consulterCategorie(id:number): Categorie{
        return this.categories.find(cat => cat.idCat == id)!;
      }
}