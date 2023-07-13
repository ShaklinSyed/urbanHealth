import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medium-cont',
  templateUrl: './medium-cont.component.html',
  styleUrls: ['./medium-cont.component.scss']
})

export class MediumContComponent {
  @Input() data: any;
  
}
