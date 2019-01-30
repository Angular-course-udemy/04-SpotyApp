import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA4JsXqhMfFPiXe4Lwtx4bk3U0R5Z33LITo8YvWAX3Cncp2_v03AiWPkem-Ln6RmtIVkWIqvronvGdRW4E'
    })
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
  }
}
