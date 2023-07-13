import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-cont',
  templateUrl: './small-cont.component.html',
  styleUrls: ['./small-cont.component.scss']
})

export class SmallContComponent{

  @Input() data: any; 
}
