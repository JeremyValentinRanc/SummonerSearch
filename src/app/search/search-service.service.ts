import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchServiceService {
  constructor(private http:HttpClient) { }

  getData(invocateurname: string, region:string) {
    const url = 'https://'+region+'.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+invocateurname+'?api_key=RGAPI-349df730-1ad9-401a-8f50-75870259a6e5'
    return this.http.get(url);
  }
  getData2(id : string){
    const url = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+id+'?api_key=RGAPI-349df730-1ad9-401a-8f50-75870259a6e5'
    return this.http.get(url);
  }
}
