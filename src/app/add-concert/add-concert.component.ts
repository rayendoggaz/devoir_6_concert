import { Component } from '@angular/core';
import { concert } from '../model/concert.model';
import { concertService } from '../services/concert.service';
import { Categorie } from '../model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.css']
})

export class AddconcertComponent {
  newconcert = new concert();

  categories! : Categorie[];

  newIdCat! : number;

  newCategorie! : Categorie;

  ngOnInit() {
    this.categories = this.concertService.listeCategories();
  }

  message!: string;

  constructor(private concertService: concertService , private router :Router,) { }

  addconcert() {
    this.newCategorie = this.concertService.consulterCategorie(this.newIdCat);
    this.newconcert.categorie = this.newCategorie;
    this.concertService.ajouterconcert(this.newconcert);
    this.router.navigate(['concerts']);
    }
}
