import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-cont',
  templateUrl: './full-cont.component.html',
  styleUrls: ['./full-cont.component.scss']
})

export class FullContComponent {
  @Input() data: any;
}
