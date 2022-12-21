import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { 

  }

  Radhika(url:any,data:any) {
    this.http.post('https://www.team.propira.com/demotesting/api'+ url,data)
  }
}
