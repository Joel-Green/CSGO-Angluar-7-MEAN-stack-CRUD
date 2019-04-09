import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UpdatepageService {
  url='http://localhost:4000/Update';
  constructor(private http:HttpClient) { }

  add_upload_data(heading, content) {
    const obj = {
      heading: heading,
      content: content,

    };
    console.log(obj);
    this.http.post(`${this.url}/adding`, obj)
        .subscribe(res => console.log('Get_Right done'));
  }
  getdata() {
    return this.http.get(`${this.url}`);
  }
}
