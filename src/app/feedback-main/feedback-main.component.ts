import { Component, OnInit } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-main',
  templateUrl: './feedback-main.component.html',
  styleUrls: ['./feedback-main.component.css']
})
export class FeedbackMainComponent implements OnInit {
  name:string;
  phone:string;
  email:string;
  message:string;
  constructor(private  fs:FeedbackService) { }

  ngOnInit() {
  }
  feedback_add_data(){
    this.fs.feedback_add_data(this.name,this.phone,this.email,this.message);
  }

}
