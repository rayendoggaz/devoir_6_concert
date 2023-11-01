import { Component } from '@angular/core';
import { concertService } from '../services/concert.service';
import { ActivatedRoute,Router } from '@angular/router';
import { concert } from '../model/concert.model';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styleUrls: []
})
export class UpdateconcertComponent {

  currentconcert = new concert();
  categories! : Categorie[];
  updatedCatId! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private concertService: concertService) { }


    ngOnInit() {
      this.categories = this.concertService.listeCategories();
      this.currentconcert =
      this.concertService.consulterconcert(this.activatedRoute.snapshot.params['id']);
      this.updatedCatId=this.currentconcert.categorie.idCat;
      }

      updateconcert()
      { this.currentconcert.categorie=this.concertService.consulterCategorie(this.updatedCatId);
        this.concertService.updateconcert(this.currentconcert);
        this.router.navigate(['concerts']);
      }
}
