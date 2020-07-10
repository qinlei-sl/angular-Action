import { SonService } from './../service/son.service';
import { FatherServiceService } from './../service/father-service.service';
import { en_US } from 'ng-zorro-antd/i18n';
import { Component, OnInit } from '@angular/core';
import { voteData } from '../voteData';

@Component({
  selector: 'app-vote-list',
  templateUrl: './vote-list.component.html',
  styleUrls: ['./vote-list.component.css']
})
export class VoteListComponent implements OnInit {
  obj:any = [
  {
    allPeople: [
      {
        name: "张三",
        agree: Boolean
      },
      {
        name: "李四",
        agree: Boolean
      }, {
        name: "二狗",
        agree: Boolean
      }, {
        name: "老五",
        agree: Boolean
      }
    ],
    // 是否开始
    start: false,
    // 期限
    deadline: "30s",
    // 同意人数
    agree: "20"
  }
  ]
  entryData: any;
  entry: any;
  // 判断是否开始
  state: Boolean = false;
  stateTime: Boolean = false;
  // 同意的人数计算
  k: any = 0;
  a: any;

  Compare: any = '0/4';
  constructor(
    public fatherService: FatherServiceService,
    public sonService:SonService
  ) { }
  ngOnInit(): void {
    this.entry = this.fatherService.entryValue
    console.log(this.sonService.entryValue[0].allPeople)
    
    // 期限计算
    console.log(this.fatherService.entryValue[0].deadline)
    setTimeout(() => {
      this.stateTime = true;
    }, this.fatherService.entryValue[0].deadline*1000);
  }

  isVisible = false;

  showModal(value): void {
    this.isVisible = true;
    this.sonService.obtain(value)
  }

  handleOk(): void {
    this.state = true;
    this.k = 0;
    this.isVisible = false;
    this.a = this.sonService.entryValue[0].allPeople

    for (let index = 0; index < this.a.length; index++) {
      // console.log(a[index])
      if (this.a[index].agree == true) {
        this.k++
      }
    }
    this.Compare = `${this.k}/${this.a.length}`
  }
  handleCancel(): void {
    this.isVisible = false;

  }

  add() {
    this.fatherService.addvalue(this.obj)
  }
}
