import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NavbarComponent } from "../units/navbar/navbar.component";
import { FileuploadComponent } from '../dataTransfer/fileupload/fileupload.component';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { ClistService } from '../core/services/clist.service';
import { Icasel,UserData } from '../core/models/common.model';
import { ReactiveFormsModule } from '@angular/forms';
import { LcourtService } from '../core/services/lcourt.service';
import { FileService } from '../core/services/file.service';


@Component({
    selector: 'app-singlecase',
    standalone: true,
    templateUrl: './singlecase.component.html',
    styleUrl: './singlecase.component.css',
    imports: [RouterLink, NavbarComponent,FileuploadComponent,CommonModule,ReactiveFormsModule]
})
export class SinglecaseComponent {
    clists: Icasel[]=[];
    courtlist: UserData[]=[];
    caseId = '';
    myCase: Icasel | null = null; // Initialize myCase
    currentDate: string = '';


    constructor(
      private clistsService: ClistService,
      private LcourtService: LcourtService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private fileService: FileService,
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
          console.log('ID:', myCase.description);
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

    editCase(){
      this.router.navigate(['/caseform/' + this.caseId])
    }
  
    removeCase(){
      if(window.confirm('are you sure?')){
      this.clistsService.deleteCase(this.caseId);
      this.router.navigate(['/maininter']);
      console.log("key3",this.caseId);
    }
  }

  assign(Lid:string){
    //this.send(this.myCase?.dmail || '');
    //this.send(this.myCase?.pmail || '');
    this.currentDate = new Date().toLocaleDateString();
    const data = {
      lcourtId: Lid,
      caseId: this.caseId,

    }
    console.log("data freak",data);
    this.clistsService.assgCourt(this.caseId,Lid,this.currentDate);
    //this.LcourtService.addAssgList(data);
  }

  async send(mailid: string){
    emailjs.init('V86Nbmh0pln1M1A2b');
    let response=await emailjs.send("service_cn3r0w7","template_q7qo6nm",{
    from_name: "Adalat",
    to_name: this.myCase?.Case_no,
    message: "your case have been assigned",
    to_email: mailid,
    });
    alert("mail has been sent");
    
      }


      getAllCourts(){
        this.LcourtService.getAllCourts().snapshotChanges().subscribe({next: (data)=>{
          this.courtlist=[];
          data.forEach((item)=>{
          let courtlist=item.payload.toJSON() as UserData
          this.courtlist.push({
            key: item.key || '',
            username: courtlist.username,
            email: courtlist.email,
            role: courtlist.role,
          });
        });
        },});
      }

      downloadFile() {
        this.fileService.downloadFile('caseReport/'+this.myCase?.report)
          .then(downloadUrl => {
            //console.log('File downloaded successfully. Download URL:', downloadUrl);
            // Use the downloadUrl to initiate file download (e.g., using an anchor tag)
            console.log('File downloaded successfully. Download URL:', downloadUrl);
            const anchor = document.createElement('a');
            anchor.href = downloadUrl;
            anchor.target = '_blank';
            anchor.download = this.myCase?.report || ''; // Set the file name
            // Trigger the click event asynchronously to ensure it happens after other async operations
            setTimeout(() => {
              anchor.click();
            }, 0);
          })
          .catch(error => {
            console.error('Error downloading file:', error);
          });
      }
}

