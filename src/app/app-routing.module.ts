import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { concertsComponent } from './concerts/concerts.component';
import { AddconcertComponent } from './add-concert/add-concert.component';
import { UpdateconcertComponent } from './update-concert/update-concert.component';

const routes: Routes = [
  {path: "concerts", component : concertsComponent},
  {path: "add-concert", component : AddconcertComponent},
  {path: "updateconcert/:id", component: UpdateconcertComponent},
  {path: "", redirectTo: "concerts", pathMatch: "full" }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
