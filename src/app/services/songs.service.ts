import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private lycricsBaseAddress = "http://localhost:5000";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  getSongLyrics(songName:string) {
    return this.http.get<any>(`${this.lycricsBaseAddress}/songLyrics?songName=${songName}`, this.httpOptions);
  }
}
