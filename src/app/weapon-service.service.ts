import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeaponServiceService {
  url='http://localhost:4000/Weapon';
  constructor(private http:HttpClient) { }
  add_data(weapon_name, weapon_damage,weapon_recoil,weapon_FireRate,weapon_mobility) {
    const obj = {
      weapon_name: weapon_name,
      weapon_damage: weapon_damage,
      weapon_FireRate: weapon_FireRate,
      weapon_recoil: weapon_recoil,
      weapon_mobility: weapon_mobility,
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj)
        .subscribe(res => console.log('Get_Right done'));
  }
  getdata() {
    return this.http.get(`${this.url}`);
  }
  editData(id) {
    return this
            .http
            .get(`${this.url}/edit/${id}`);
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
    deleteData(id) {
      return this
                .http
                .get(`${this.url}/delete/${id}`);
    }
    
}
