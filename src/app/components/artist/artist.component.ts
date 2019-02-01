import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  artist:any = {}

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe( params => { 
      this.goToArtist(params['id'])
    })
  }

  goToArtist(id: string) {
    this.spotify.goToArtist(id)
      .subscribe((data:any) => {
        this.artist = data
        console.log(data)
      })
  }
}
