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

  deleteData(id) {
    return this
              .http
              .get(`${this.url}/delete/${id}`);
  }
  up_data(weapon_name, weapon_damage, weapon_recoil,weapon_FireRate,weapon_mobility, id) {

    const obj = {
        weapon_name: weapon_name,
        weapon_damage: weapon_damage,
        weapon_recoil: weapon_recoil,
        weapon_FireRate:weapon_FireRate,
        weapon_mobility:weapon_mobility
      };
    this
      .http
      .post(`${this.url}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }
  upcontent(heading,content,id){
    const obj = {
      heading:heading,
      content: content,
    };
  this
    .http
    .post(`${this.url}/upcontent/${id}`, obj)
    .subscribe(res => console.log('Done'));
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
    }
}
