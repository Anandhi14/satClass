import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() child:string="welcome all";
  @Output() parent=new EventEmitter;
  name="child msg";
  send(){
    this.parent.emit(this.name);
  }
}
