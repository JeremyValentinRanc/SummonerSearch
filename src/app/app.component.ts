import { Component } from '@angular/core';
import { SearchServiceService } from './search/search-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchServiceService]
})
export class AppComponent {
  title = 'summonerSearch';
}
