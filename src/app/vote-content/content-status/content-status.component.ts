import { SonService } from './../../service/son.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-status',
  templateUrl: './content-status.component.html',
  styleUrls: ['./content-status.component.css']
})
export class ContentStatusComponent implements OnInit {
  timer: any;
  sec: any;
  userData: any;
  constructor(public sonService:SonService) { }
  @Input()
  set UserData(text: any) {
    this.userData = !text ? "啥都没有给我" : text;
  };
  ngOnInit() {
    var time = new Date();
    time.getFullYear(); //获取完整的年份(4位,1970-???)
    time.getMonth(); //获取当前月份(0-11,0代表1月)
    time.getDate(); //获取当前日(1-31)
    time.getHours(); //获取当前小时数(0-23)
    time.getMinutes(); //获取当前分钟数(0-59)
    this.sec = time.getSeconds();
    if (time.getSeconds() < 10) {
      this.sec = `0${time.getSeconds()}`
    } 
    this.timer = `${time.getFullYear()}/${time.getMonth() + 1}/${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${this.sec}`

    // console.log(this.sonService.entryValue[0].allPeople)
    // for (let index = 0; index < this.sonService.entryValue[0].allPeople.length; index++) {
      
    // }
    console.log(this.userData[0])

  }


}
