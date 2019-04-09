import { Component, OnInit } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@Component({
  selector: 'app-learn-main',
  templateUrl: './learn-main.component.html',
  styleUrls: ['./learn-main.component.css']
})
export class LearnMainComponent implements OnInit {
chkPage:number;
test1:boolean;
  constructor() { }

  ngOnInit() {
    this.chkPage=2;
        
  }
  scrollTo(el:HTMLElement)
  {
    el.scrollIntoView({behavior: "smooth"});
  }
  setUtility()
  {
    if(this.chkPage!= 4)
    {
      this.chkPage=4; 
    }  
    else
    {
      this.chkPage=0;  //set the page to zero so that the page may disappear
    }
  }
  setMap()
  {
    if(this.chkPage!= 1)
    {
      this.chkPage=1;
      
    }  
    else
    {
      this.chkPage=0;
      //set the page to zero so that the page may disappear
      
    }
  }
  setAim()
  {
    if(this.chkPage!= 3)
    {
      this.chkPage=3;
      
    }  
    else
    {
      this.chkPage=0;//set the page to zero so that the page may disappear
      
    }
  }
  setWeapon()
  {
    if(this.chkPage!= 2)
    {
      this.chkPage=2;
      
    }  
    else
    {
      this.chkPage=0;//set the page to zero so that the page may disappear
      
    }
  }
  
}
