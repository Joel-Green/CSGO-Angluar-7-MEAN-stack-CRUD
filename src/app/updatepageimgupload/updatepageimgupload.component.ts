import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-updatepageimgupload',
  templateUrl: './updatepageimgupload.component.html',
  styleUrls: ['./updatepageimgupload.component.css']
})
export class UpdatepageimguploadComponent implements OnInit {
  id:any;
  constructor(private route: ActivatedRoute,
    private router: Router,) { 
      // this.id = route.snapshot.params['id'];
    }
    public uploader: FileUploader = new FileUploader({url: `http://localhost:4000/Update/uploadImage/${this.route.snapshot.params['id']}`, itemAlias: 'photo'});

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      alert('File uploaded successfully');
    };
  }

}
