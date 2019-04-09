import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url='http://localhost:4000/Feedback';
  constructor(private http:HttpClient) { }
  feedback_add_data(name, phone,email,message) {
    const obj = {
      name: name,
      phone: phone,
      email: email,
      message: message,

    };
    console.log(obj);
    this.http.post(`${this.url}/adding`, obj)
        .subscribe(res => console.log('Get_Right done'));
  }
}
