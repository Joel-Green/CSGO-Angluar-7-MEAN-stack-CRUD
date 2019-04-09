import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { UpdatepageService } from '../updatepage.service';
@Component({
  selector: 'app-dash-update-content',
  templateUrl: './dash-update-content.component.html',
  styleUrls: ['./dash-update-content.component.css']
})
export class DashUpdateContentComponent implements OnInit {
  arr:any={};
  obj:any;
  updateId:string;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private us: UpdatepageService) {
      this.updateId = route.snapshot.params['id'];
    }
    checkidObj(){
      console.log(this.updateId);
      console.log(this.obj);
      
    }
    
    ngOnInit() {
      this.obj=this.us.editData(this.updateId);
      this.checkidObj();
    }
    
    upcontent() {
      // this.updateId=this.updateId.substr(1);
      this.route.params.subscribe(params => {
        this.us.upcontent(this.obj.heading,this.obj.content, this.updateId);
        this.router.navigate(['dashboard']);
      });
      
      
    }  
    
  }
  
  
  

