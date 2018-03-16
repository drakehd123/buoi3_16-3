import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { EventListener } from '@angular/core/src/debug/debug_node';
// import { EventEmitter} from 'protractor';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tienvu-witch',
  templateUrl: './witch.component.html',
  styleUrls: ['./witch.component.scss']
})
export class WitchComponent implements OnInit {
  @Input() checked: Boolean ;

  constructor() { }
  counter = 0;
  @Output() changeX = new EventEmitter();

  ngOnInit() {
  }
  change2() {
    this.counter = this.counter + 1;
    this.changeX.emit(this.counter);
  }
  chanValue(event) {

    this.changeX.emit(event.target.checked);
  }
}
