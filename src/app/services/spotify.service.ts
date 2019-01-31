import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { pipe } from '@angular/core/src/render3';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCbdeAVAzG142dZBJMM3yTwNGC-LW5fkSfbZLxTFxg2cr7wGQfHfbBNB5wNk5lr4p24tKWFmB0-UBs51TM'
    })
    return this.http.get(url, {headers})
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe(map( data => data['albums'].items))
  }
  
  getArtist(search:string) {
    return this.getQuery(`search?q=${ search }&type=artist&limit=20`)
      .pipe(map( data => data = data['artists'].items))
  }
}
