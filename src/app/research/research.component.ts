import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderLineComponent } from '../shared/header-line/header-line.component';
import { ResearchCardComponent } from '../research-card/research-card.component';

@Component({
    selector: 'app-research',
    imports: [CommonModule, HeaderLineComponent, ResearchCardComponent],
    templateUrl: './research.component.html',
    styleUrl: './research.component.css'
})
export class ResearchComponent {

}
