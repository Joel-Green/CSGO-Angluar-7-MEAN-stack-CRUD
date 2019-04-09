import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { WeaponServiceService } from '../weapon-service.service';

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.css']
})
export class UpdateDataComponent implements OnInit {
  arr:any={};
  obj:any;
  updateId:string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private ws: WeaponServiceService) {
      this.updateId = route.snapshot.params['id'];
     }

  checkidObj(){
      console.log(this.updateId);
      console.log(this.obj);
      
    }

    ngOnInit() {
  //   this.route.params.subscribe(params => {
  //     this.ws.updateData(params['id']).subscribe(res => {
  //       this.arr = res;
  //   });
  // });
  
  this.obj=this.ws.editData(this.updateId);
  this.checkidObj();
  

}
  

  up_data() {
    // this.updateId=this.updateId.substr(1);
    this.route.params.subscribe(params => {
       this.ws.up_data(this.obj.weapon_name, this.obj.weapon_damage, this.obj.weapon_recoil,this.obj.weapon_FireRate,this.obj.weapon_mobility, this.updateId);
       this.router.navigate(['dashboard']);
 });
  

}
}
