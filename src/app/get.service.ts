import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iposts } from './model/posts';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private _http: HttpClient) { }


  getallposts(): Observable<Iposts[]> {
    return this._http.get<Iposts[]>(environment.baseUrl)
    // `${environment.baseUrl}/posts`
  }



  // for single post

  getsinglepost(id: number): Observable<Iposts> {
    return this._http.get<Iposts>(environment.baseUrl + '/' + id)
  }


  //  getsinglepost(id : string) : Observable<Iposts>{
  //   return this._http.get<Iposts>(environment.baseUrl + '/'+ id) 
  //  }







}
