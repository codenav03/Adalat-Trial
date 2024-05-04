import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FileuploadComponent } from '../dataTransfer/fileupload/fileupload.component';
import { NavbarComponent } from '../units/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Icasel, UserData } from '../core/models/common.model';
import { ClistService } from '../core/services/clist.service';
import emailjs from '@emailjs/browser';
import { LcourtService } from '../core/services/lcourt.service';
import { LowernavComponent } from "../lowernav/lowernav.component";
import { FileService } from '../core/services/file.service';
import { AuthService } from '../auth.service';
@Component({
    selector: 'app-lowersinglecase',
    standalone: true,
    templateUrl: './lowersinglecase.component.html',
    styleUrl: './lowersinglecase.component.css',
    imports: [RouterLink, NavbarComponent, FileuploadComponent, CommonModule, ReactiveFormsModule, LowernavComponent]
})
export class LowersinglecaseComponent {
  clists: Icasel[]=[];
  courtlist: UserData[]=[];
  caseId = '';
  myCase: Icasel | null = null; // Initialize myCase
  selectedFile: File | null = null;


  constructor(
    private clistsService: ClistService,
    private LcourtService: LcourtService,
    private activatedRoute: ActivatedRoute,
    private ClistService: ClistService,
    private router: Router,
    private fileService: FileService,
    private authService: AuthService,
  ){
    

  }
 ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next:(params) => {
        this.caseId = params['id'];
        this.getExpense(this.caseId);
      },
    });
  }
  getExpense(key: string){
    this.clistsService.getCase(key).snapshotChanges().subscribe({
      next:(data)=>{
        let myCase =data.payload.toJSON() as Icasel;
        if(myCase){
        //console.log('ID:', myCase.description);
        this.myCase = myCase;
        console.log('My Case:', this.myCase);
        console.log("key",key);
        }
        else{
          console.log("mycase null error!");
        }
      },
    });
  }

  /*downloadFileFromUrl() {
    console.log("filedwnld called");
    this.fileService.downloadFile(this.myCase?.url || '')
      .then(downloadUrl => {
        // Here you can handle the download URL, for example, open it in a new tab
        window.open(downloadUrl);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  }*/
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  /*uploadFile(file: File) {
    this.fileService.uploadFile(file,'caseFile')
      .then(downloadUrl => {
        console.log('File uploaded. Download URL:', downloadUrl);
        // You can do further processing here, such as displaying a success message
        this.ClistService.uploadCaseReport(this.caseId,file.name);
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        // Handle error, such as displaying an error message to the user
      });
  }*/

  uploadFile() {
    if (this.selectedFile) {
      this.ClistService.uploadCaseReport(this.caseId,this.selectedFile.name);
      this.fileService.uploadFile(this.selectedFile,'caseReport')
        .then(downloadUrl => {
          console.log('File uploaded successfully. Download URL:', downloadUrl);
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    } else {
      console.error('No file selected.');
    }
  }


  downloadFile() {
    this.fileService.downloadFile('caseFile/'+this.myCase?.url)
      .then(downloadUrl => {
        //console.log('File downloaded successfully. Download URL:', downloadUrl);
        // Use the downloadUrl to initiate file download (e.g., using an anchor tag)
        console.log('File downloaded successfully. Download URL:', downloadUrl);
        const anchor = document.createElement('a');
        anchor.href = downloadUrl;
        anchor.target = '_blank';
        anchor.download = this.myCase?.url || ''; // Set the file name
        // Trigger the click event asynchronously to ensure it happens after other async operations
        setTimeout(() => {
          anchor.click();
        }, 0);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  }

  closeCase(){
    this.ClistService.closeCase(this.caseId);
    alert('case is closed!!');
  }
}
