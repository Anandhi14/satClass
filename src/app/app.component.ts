import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'git';
  name="hello world";
  hello="component"
receive(event:any){
this.hello=event;
}
}
