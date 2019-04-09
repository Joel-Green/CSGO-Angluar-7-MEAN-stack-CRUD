import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-main',
  templateUrl: './home-main.component.html',
  styleUrls: ['./home-main.component.css']
})
export class HomeMainComponent implements OnInit {
  public chkPage:number;
  constructor() { }

  ngOnInit() {
  }
  scrollTo(el:HTMLElement)
  {
    el.scrollIntoView({behavior: "smooth"});
  }
  ctData(){
    if(this.chkPage!=1){
      this.chkPage=1;
    }
    else{
      this.chkPage=0;
    }
  }
  tData(){
    if(this.chkPage!=2){
      this.chkPage=2;
    }
    else{
      this.chkPage=0;
    }
  }
  
}
