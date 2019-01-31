import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  artists: any[] = []

  constructor( private spotify: SpotifyService) { }

  searchFor(search:string) {
    console.log(search)
    this.spotify.getArtist(search)
      .subscribe((data:any) => this.artists = data )
  }

}
