import { Injectable } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/compat/storage"

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private storage: AngularFireStorage) { }

  uploadFile(file: File,folder:string): Promise<string> {
    const filePath = `${folder}/${file.name}`; // Specify the path where you want to store the file
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    return new Promise((resolve, reject) => {
      uploadTask.snapshotChanges().subscribe(
        () => {
          fileRef.getDownloadURL().subscribe(downloadUrl => {
            resolve(downloadUrl);
          });
        },
        error => {
          reject(error);
        }
      );
    });
  }


 /* downloadFile(url: string): Promise<any> {
    return this.storage.storage.refFromURL(url).getDownloadURL();
  }*/

  downloadFile(filePath: string): Promise<string> {
    const fileRef = this.storage.ref(filePath);
    return fileRef.getDownloadURL().toPromise();
  }

}
