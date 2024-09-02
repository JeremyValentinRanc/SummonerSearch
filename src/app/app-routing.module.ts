import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SummonerComponent } from './summoner/summoner.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'summoner', component: SummonerComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
