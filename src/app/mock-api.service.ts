import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ADDRESS = "https://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(ADDRESS);
  }
}
