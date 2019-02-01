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
      'Authorization': 'Bearer BQCV5FqktM9of2rSpHk0G5pCoSui-4L0FmPt4kIuOwmIWhvDU-a1Mt8T2Z3LNdPLPtwlhqsChDkKTzxeOlA'
    })
    return this.http.get(url, {headers})
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
      .pipe(map( data => data['albums'].items))
  }
  
  getArtists(search:string) {
    return this.getQuery(`search?q=${ search }&type=artist&limit=20`)
      .pipe(map( data => data = data['artists'].items))
  }

  goToArtist(id:string) {
    return this.getQuery(`artists/${ id }`)
      // .pipe(map( data => data))
  }

  getTopTracks(id:string) {
    return this.getQuery(`artists/${ id }/top-tracks?country=ES`)
      .pipe(map(data => data = data['tracks']))
  }

}
