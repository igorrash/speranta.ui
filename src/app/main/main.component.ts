import { Component, OnInit } from '@angular/core';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public songLyrics = "";

  public selectedSongs = ["Doamne vreau sa", "Isus nume", "O Doamne mare"];
  public showFiller = false;
  
  constructor(private lyricsService : SongsService) { }

  ngOnInit(): void {

    this.lyricsService.getSongLyrics("Privim").subscribe((data: any) => {
      this.songLyrics = data[0].songContent.replace(/(?:\r\n|\r|\n)/g, '<br/>');

      console.log(this.songLyrics);

    });
    

  }

  


}
