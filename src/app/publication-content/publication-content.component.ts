import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'publication-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publication-content.component.html',
  styleUrl: './publication-content.component.css'
})
export class PublicationContentComponent {

  @Input() publication: any;
}
