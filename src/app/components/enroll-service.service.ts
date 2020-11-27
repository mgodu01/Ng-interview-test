import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollServiceService {

  constructor(private http : HttpClient) { }

  getEnrolles() {
    return this.http.get<any>('http://localhost:8080/enrollees');
  }
  getEnrolleById(id) {
    return this.http.get<any>('http://localhost:8080/enrollees/'+id);
  }
  updateEnrollee(id, data) {
    return this.http.put<any>('http://localhost:8080/enrollees/'+id, data);
  }
}
