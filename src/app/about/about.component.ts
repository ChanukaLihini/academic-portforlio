import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import saveAs from 'file-saver';
import { HeaderLineComponent } from '../shared/header-line/header-line.component';
import { SubHeaderLineComponent } from '../shared/sub-header-line/sub-header-line.component';
import { DescriptionLineComponent } from '../shared/description-line/description-line.component';
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    HeaderLineComponent,
    SubHeaderLineComponent,
    DescriptionLineComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  constructor(private http: HttpClient, private fileService:FileService) {}

  downloadCV(): void {
    const filePath = '../../assets/images/test.pdf';
    this.http
      .get(filePath, { responseType: 'blob' })
      .subscribe(async (res: Blob) => {
        this.fileService.saveFile(res,'ChanukaTennakoon_CV.pdf');
      });
  }
}
