import { Component } from '@angular/core';

@Component({
  selector: 'lec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My first app testLec';
  son = {word: 'Tadei', status: 'lovely son'};
  forever = 'Family';

  doSay(word: string) {
    console.log(`${word} has said.`);
  }

  changeStatus(status) {
    this.son.status = status;
  }
}
