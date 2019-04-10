import { Component, OnInit } from '@angular/core';
import { feedbackClass } from '../weaponClass';
import { FeedbackService } from '../feedback.service';
@Component({
  selector: 'app-dash-feedback',
  templateUrl: './dash-feedback.component.html',
  styleUrls: ['./dash-feedback.component.css']
})
export class DashFeedbackComponent implements OnInit {
  name:string;
  phone:string;
  email:string;
  message:string;
  Arr:feedbackClass[];
  constructor(private feeds:FeedbackService) { }

  ngOnInit() {
    this.feeds.getlul().subscribe((data: feedbackClass[]) => {this.Arr = data;});
    console.log(this.Arr);
  }
  deleteData(id) {
    this.feeds.deleteData(id).subscribe(res => {
      console.log('Deleted');
    });
  }

}
