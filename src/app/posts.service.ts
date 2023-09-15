import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  // TODO ajouter la méthode "recupererTousLesPosts"
  getPosts(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
