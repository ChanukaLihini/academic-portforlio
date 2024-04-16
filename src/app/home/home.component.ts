import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private http: HttpClient) {}

  downloadCV(): void {
    const filePath = '../../assets/images/test.pdf';
    this.http.get(filePath, { responseType: 'blob' }).subscribe((res: Blob) => {
      saveAs(res, 'ChanukaTennakoon_CV.pdf');
    });
  }
}
