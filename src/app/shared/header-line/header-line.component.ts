import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-line',
    imports: [],
    templateUrl: './header-line.component.html',
    styleUrl: './header-line.component.css'
})
export class HeaderLineComponent {
  @Input() title: string | undefined;
}
