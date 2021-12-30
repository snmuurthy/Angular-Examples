import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getTopics()
  {
    return this.http.get("assets//json//topics.json");
  }
  
}
