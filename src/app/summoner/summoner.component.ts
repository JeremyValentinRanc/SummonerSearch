import { Component, Input } from '@angular/core';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-summoner',
  templateUrl: './summoner.component.html',
  styleUrls: ['./summoner.component.css']
})
export class SummonerComponent {
  @Input() search: any;
  @Input() stat: any;

  constructor(private searchComponent: SearchComponent) {
    console.log(this.search);
    console.log(this.stat);
  }
}
