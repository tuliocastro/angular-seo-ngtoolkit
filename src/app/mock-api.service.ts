import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const ADDRESS = "http://www.mocky.io/v2/5b6d76393300006a1ea36df1";

@Injectable({
  providedIn: 'root'
})
export class MockApiService {

  constructor(private httpClient: HttpClient) { }

  getPosts(){
    return this.httpClient.get(ADDRESS);
  }
}
