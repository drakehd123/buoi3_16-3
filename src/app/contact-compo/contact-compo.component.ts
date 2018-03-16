import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tienvu-contact-compo',
  templateUrl: './contact-compo.component.html',
  styleUrls: ['./contact-compo.component.scss']
})
export class ContactCompoComponent implements OnInit {
  @Input() anhurl = '';
  _name: string;
  @Input() round: Boolean;

  constructor() { }
  get name() {
    return this._name;
  }
  @Input() set name(value: string) {
    this._name = value;
  }
  ngOnInit() {
  }




}
