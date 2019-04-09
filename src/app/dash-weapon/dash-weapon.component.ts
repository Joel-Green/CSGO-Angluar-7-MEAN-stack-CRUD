import { Component, OnInit } from '@angular/core';
import { weaponClass } from '../weaponClass';
import { WeaponServiceService } from '../weapon-service.service';
import { ActivatedRoute,Router } from '@angular/router';
import { UpdatepageService } from '../updatepage.service';
@Component({
  selector: 'app-dash-weapon',
  templateUrl: './dash-weapon.component.html',
  styleUrls: ['./dash-weapon.component.css']
})
export class DashWeaponComponent implements OnInit {

  weapon_name:string;
  weapon_damage:string;
    weapon_mobility:String;
    weapon_FireRate:String;
    arr:weaponClass[];
    selectedFile: File;
    weapon_recoil:String;
    heading:String;
    content:String;
  
    constructor(private ws:WeaponServiceService,private route: ActivatedRoute,
      private router: Router,private us:UpdatepageService) { }
  
    ngOnInit() {
      this.ws.getdata().subscribe((data: weaponClass[]) => {this.arr = data;});
    }
    add_data(){
      this.ws
      .add_data(this.weapon_name,this.weapon_damage,this.weapon_recoil,this.weapon_FireRate,this.weapon_mobility);
    }
    add_upload_data(){
      this.us.add_upload_data(this.heading,this.content);
    }
    
    deleteData(id) {
      this.ws.deleteData(id).subscribe(res => {
        console.log('Deleted');
      });
    }
  
    // update_data(id){
    //   this.ws.up_data(this.weapon_name,this.weapon_damage,this.weapon_recoil,this.weapon_FireRate,this.weapon_mobility,id);
    //   console.log(id);
    //   this.router.navigate(['update']);
      
    // }
  }
