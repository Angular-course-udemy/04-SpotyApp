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
  loading:boolean
  tracks:any[] = []

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe( params => { 
      this.goToArtist(params['id'])
      this.getTopTracks(params['id'])
    })
  }

  goToArtist(id: string) {
    this.loading = true
    this.spotify.goToArtist(id)
      .subscribe((data:any) => {
        this.artist = data
        this.loading = false
      })
  }
    
  getTopTracks(id:string) {
    this.spotify.getTopTracks(id)
      .subscribe((data:any) => {
        this.tracks = data
          console.log(data)
      })
  }
}
