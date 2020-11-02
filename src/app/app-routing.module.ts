import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'
import { from } from 'rxjs';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const routes: Routes = [
  {  path: 'heroe/:id', component: HeroeComponent},
  {  path:'heroes', component: HeroesComponent},
  {  path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
