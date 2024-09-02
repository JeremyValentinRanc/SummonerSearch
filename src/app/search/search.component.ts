import { Component } from '@angular/core';
import { SearchServiceService } from './search-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  public search: any;
  public stat: any
  public invocateurname!: string;
  public region!: string;
  constructor(private searchservice: SearchServiceService) { }

  ngOnInit() {

  }
  chargerDonnees(){
    this.searchservice.getData(this.invocateurname, this.region)
      .subscribe(data => {
        this.search = data
        console.log(this.search)
        console.log(this.invocateurname)
    })

  }
  bouton() {
    console.log(this.region)
  }

  chargerDonnees2(){
    this.searchservice.getData2(this.search.id)
      .subscribe(data2 => {
        this.stat = data2
        console.log(this.stat)
    })
  }
  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
	}
}
