import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class JsopUsersService {
  constructor(private http: HttpClient) {}

  getUserDetails(id: number) {
    return this.http.get<any>(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
  }
}
