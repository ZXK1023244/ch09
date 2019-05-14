import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  names: string[];
  imgs: string[];
  constructor() {
    this.names = ['Hong Mao', 'Lan Tu', 'Sha Li'];
    this.imgs = ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554652016913&di=0fb26be5fd3c97a984d6ce30eeb9620c&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2Fimg2007%2F4%2F35%2F002.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554652055435&di=23dede9f81f06ad6d77858c89b510016&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fbaike%2Fpic%2Fitem%2Fb8405490fb1b90c1a977a4c2.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554652085834&di=7968f38db3185aa91bd572d4039655c8&imgtype=0&src=http%3A%2F%2Fpic.baike.soso.com%2Fp%2F20120929%2Fbki-20120929180812-1228316895.jpg'];
  }

  ngOnInit() {
  }

}
/*
使用 || 显示全部表格(另一个值)
*/
