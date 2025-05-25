import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient, private fileService:FileService) {}

  downloadCV(): void {
    const filePath = '../../assets/images/test.pdf';
    this.http.get(filePath, { responseType: 'blob' }).subscribe(async (res: Blob) => {
      this.fileService.saveFile(res,'ChanukaTennakoon_CV.pdf');
    });
  }
}
