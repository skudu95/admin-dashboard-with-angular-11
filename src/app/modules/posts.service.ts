import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // private baseURL = 'http://localhost:8020/api/v1/movies';

  // constructor(private httpClient: HttpClient) { }
  constructor() { }

  getPosts() {
    // backend using ExpressJS
    // TODO: grab the link from the environment
    // return axios.get('http://localhost:3000/posts');

    // backend created using Spring Boot
    return axios.get('http://localhost:8020/api/v1/movies');
    // return this.httpClient.get<IPost[]>(`${this.baseURL}`);
  }
}
