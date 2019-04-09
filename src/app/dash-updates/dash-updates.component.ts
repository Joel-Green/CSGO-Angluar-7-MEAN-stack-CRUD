import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UpdatepageService } from '../updatepage.service';
import { updateClass } from '../weaponClass';
@Component({
  selector: 'app-dash-updates',
  templateUrl: './dash-updates.component.html',
  styleUrls: ['./dash-updates.component.css']
})
export class DashUpdatesComponent implements OnInit {
  heading:string;
  content:string;
  array:updateClass[];
    constructor(private route: ActivatedRoute,
      private router: Router,private us:UpdatepageService) { }
  
    ngOnInit() {
      this.us.getdata().subscribe((data: updateClass[]) => {this.array = data;});
    }
    add_upload_data(){
      this.us.add_upload_data(this.heading,this.content);
    }
    deleteData(id) {
      this.us.deleteData(id).subscribe(res => {
        console.log('Deleted');
      });
    }

  }
