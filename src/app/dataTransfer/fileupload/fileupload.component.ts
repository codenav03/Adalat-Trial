import { Component } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage"
import { FileService } from '../../core/services/file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClistService } from '../../core/services/clist.service';
import { AuthService } from '../../auth.service';


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
  selectedFile: File | null = null;

  constructor(
    private fireStorage:AngularFireStorage,
    private fileService: FileService,
    private ClistService: ClistService,
    private activatedRoute: ActivatedRoute,private authService: AuthService,private router: Router){
      if (!this.authService.isLoggedIn()) {
        // If not logged in, navigate to login page
        this.router.navigate(['/']);
      }

    }

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

    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
     /* if (file) {
        this.uploadFile(file);
      }*/
    }

    uploadFile() {
      if (this.selectedFile) {
        this.fileService.uploadFile(this.selectedFile,'caseReport')
          .then(downloadUrl => {
            alert('File uploaded successfully.');
          })
          .catch(error => {
            console.error('Error uploading file:', error);
          });
      } else {
        console.error('No file selected.');
      }
    }

   /* uploadFile(file: File) {
      this.fileService.uploadFile(file,'caseFile')
        .then(downloadUrl => {
          console.log('File uploaded. Download URL:', downloadUrl);
          // You can do further processing here, such as displaying a success message
          this.ClistService.uploadCaseFile(this.caseId,file.name);
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          // Handle error, such as displaying an error message to the user
        });
    }*/


  }

