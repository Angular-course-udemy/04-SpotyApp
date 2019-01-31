import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { pipe } from '@angular/core/src/render3';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDLz9h-ORMHmpglu87sEDCvNFoYO7walk94se-wlo-ntbnjF4ZUotL-F2R4NU0BMrUdO5XyCjIKR5EqU64'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
      .pipe(map( data => data['albums'].items))
  }
  
  getArtist(search:string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDLz9h-ORMHmpglu87sEDCvNFoYO7walk94se-wlo-ntbnjF4ZUotL-F2R4NU0BMrUdO5XyCjIKR5EqU64'
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${ search }&type=artist&limit=20`, {headers})
      .pipe(map( data => data = data['artists'].items))
  }
}
