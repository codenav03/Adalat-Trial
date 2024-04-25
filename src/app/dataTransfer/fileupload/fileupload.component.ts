import { Component } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage"
import { FileService } from '../../core/services/file.service';
import { ActivatedRoute } from '@angular/router';
import { ClistService } from '../../core/services/clist.service';


@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css'
})
export class FileuploadComponent {
  title = 'fileupload';
  caseId = '';

  constructor(
    private fireStorage:AngularFireStorage,
    private fileService: FileService,
    private ClistService: ClistService,
    private activatedRoute: ActivatedRoute,){}

   /*async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `CaseDetails/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      console.log(url)
    }*/

    ngOnInit(): void {
      this.activatedRoute.params.subscribe({
        next:(params) => {
          this.caseId = params['id'];
          //this.getExpense(this.caseId);
          console.log("from file upload component:",this.caseId);
        },
      });
    }

    onFileChange(event: any) {
      const file = event.target.files[0];
      if (file) {
        this.uploadFile(file);
      }
    }
  
    uploadFile(file: File) {
      this.fileService.uploadFile(file)
        .then(downloadUrl => {
          console.log('File uploaded. Download URL:', downloadUrl);
          // You can do further processing here, such as displaying a success message
          this.ClistService.uploadUrl(this.caseId,downloadUrl);
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          // Handle error, such as displaying an error message to the user
        });
    }
  }

