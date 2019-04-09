import { Component, OnInit } from '@angular/core';
import { weaponClass } from '../weaponClass';
import { WeaponServiceService } from '../weapon-service.service';

@Component({
  selector: 'app-learn-weapons',
  templateUrl: './learn-weapons.component.html',
  styleUrls: ['./learn-weapons.component.css']
})
export class LearnWeaponsComponent implements OnInit {
  weapon_name:string;
  weapon_damage:string;
  weapon_mobility:String;
  weapon_FireRate:String;
  weapon_recoil:String;
   page=1;
   arr:weaponClass[];
  noOfPages:any;
  constructor(private ws:WeaponServiceService) {

  }  

  ngOnInit() {
    this.ws.getdata().subscribe((data: weaponClass[]) => {this.arr = data;});
  }
//   arr=[
//   {'name':'AK-47','damage':100,'recoil':61,'fire_rate':61,'mobility':40,'weapon_image':'../../assets/images/m4a4.png'},
//   {'name':'M4A4','damage':91,'recoil':51,'fire_rate':'51','mobility':40,'weapon_image':'../../assets/images/m4a4.png'},
//   {'name':'AK-47','damage':100,'recoil':61,'fire_rate':61,'mobility':40,'weapon_image':'../../assets/images/ak.png'},
//   {'name':'M4A1-S','damage':10,'recoil':61,'fire_rate':61,'mobility':40,'weapon_image':'../../assets/images/m4a1-s.png'}
// ];
  // alength:number;
  // this.alength=this.arr.length();
  

}
