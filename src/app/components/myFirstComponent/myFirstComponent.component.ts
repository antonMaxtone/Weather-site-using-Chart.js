import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'lec-myfirstcomponent',
  templateUrl: './myFirstComponent.component.html',
  styleUrls: ['./myFirstComponent.component.scss']
})

export class MyFirstComponent {
  imgAng = '../favicon.ico';
  altImg = 'Something text';

  @Input() word: string;
  @Input() status: string;

  @Output() say = new EventEmitter<{}>();
  @Output() statusChange = new EventEmitter<string>();

  handleClick() {
    this.say.emit({});
  }

  handleStatusChange(e) {
    this.statusChange.emit(e.target.value);
    // console.log(e.target.value);
  }
}
