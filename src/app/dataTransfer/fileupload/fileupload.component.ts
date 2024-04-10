import { Component } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage"

@Component({
  selector: 'app-fileupload',
  standalone: true,
  imports: [],
  templateUrl: './fileupload.component.html',
  styleUrl: './fileupload.component.css'
})
export class FileuploadComponent {
  title = 'fileupload';

  constructor(private fireStorage:AngularFireStorage){}

   async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `CaseDetails/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      console.log(url)
    }
  }
}
