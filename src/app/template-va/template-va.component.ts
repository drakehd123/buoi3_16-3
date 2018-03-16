import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tienvu-template-va',
  templateUrl: './template-va.component.html',
  styleUrls: ['./template-va.component.scss']
})
export class TemplateVaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(value) {
    console.log(value);
  }
  // viewchild se input vao vao trong cai the co ten no va kieu cua no la element ref giup bao dugn
  // tslint:disable-next-line:member-ordering
  @ViewChild('nameinput') name: ElementRef;
  sayHello() {
    console.log('hello' + this.name.nativeElement.value);
  }

}
