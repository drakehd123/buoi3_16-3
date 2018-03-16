import { Component, OnInit } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tienvu-list-1',
  templateUrl: './list-1.component.html',
  styleUrls: ['./list-1.component.scss']
})
export class List1Component implements OnInit {
  avartar: string;
  index;
  constructor() { }
  message = 'helloworld';
  clorBt = true;
  contact = [
    {
      id: 1,
      name: 'nguyen van phuong',
      job: 'mentor',
      avatar: { url: 'https://i.ytimg.com/vi/CaVqa5zX5tw/maxresdefault.jpg' },
      round: false
    },
    {
      id: 2,
      name: 'nguyen van lanh',
      job: 'mentor2',
      avatar: { url: 'https://i.ytimg.com/vi/CaVqa5zX5tw/maxresdefault.jpg' },
      round: true
    },
    {
      id: 3,
      name: 'nguyen van long',
      job: 'mentor3',
      avatar: { url: 'https://i.ytimg.com/vi/CaVqa5zX5tw/maxresdefault.jpg' },
      round: false,
    }
  ];


  messages = [];
  hello: String = '';

  ckeckT = true;
  ngOnInit() {
    this.avartar = 'https://i.ytimg.com/vi/CaVqa5zX5tw/maxresdefault.jpg';
  }
  onclick() {
    this.message = 'ban nhan lan 2';
    setTimeout(() => { this.message = 'ban nhan roi ! '; }, 3000);
  }
  changeTab(index) {
    this.index = index;
  }
  tvSitch(event, index) {
    console.log(event);
    this.contact[index].round = event;
  }


  displayCounter(count) {
    console.log(count);
  }

  onClick1() {
    // console.log('clicked !');
    this.messages.push(this.hello);
  }
}
