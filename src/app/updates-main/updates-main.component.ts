import { Component, OnInit } from '@angular/core';
import { updateClass } from '../weaponClass';
import { UpdatepageService } from '../updatepage.service';

@Component({
  selector: 'app-updates-main',
  templateUrl: './updates-main.component.html',
  styleUrls: ['./updates-main.component.css']
})
export class UpdatesMainComponent implements OnInit {
  heading:string;
  content:string;
  array:updateClass[];
  constructor(private us:UpdatepageService) { }

  ngOnInit() {
    this.us.getdata().subscribe((data: updateClass[]) => {this.array = data;});
  }
  scrollTo(el:HTMLElement)
  {
    el.scrollIntoView({behavior: "smooth"});
  }
}
