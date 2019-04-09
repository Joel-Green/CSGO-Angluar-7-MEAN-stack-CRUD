import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ActivatedRoute,Router } from '@angular/router';
// import { request } from 'https';
const URL = 'http://localhost:4000/Weapon/upload';
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  
  id:any;
  constructor(private route: ActivatedRoute,
    private router: Router,) { 
      // this.id = route.snapshot.params['id'];
    }
    public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  ngOnInit() {
    console.log(this.id);
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log('File uploaded successfully');
    };
  }

}
