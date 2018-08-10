import { Injectable } from "@angular/core";

import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { MockApiService } from "../mock-api.service";

@Injectable()
export class PostResolver implements Resolve<Observable<any>> {
  constructor(private mockApiService: MockApiService) {}

  resolve() {
    return this.mockApiService.getPosts();
  }
}
