import { Component, Input } from '@angular/core';

@Component({
    selector: 'sub-header-line',
    imports: [],
    templateUrl: './sub-header-line.component.html',
    styleUrl: './sub-header-line.component.css'
})
export class SubHeaderLineComponent {

  @Input() mainTitle: string | undefined;

  @Input() subTitle: string | undefined;

  @Input() timeLine: string | undefined;
}
