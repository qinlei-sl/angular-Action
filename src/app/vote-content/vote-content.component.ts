import { SonService } from './../service/son.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote-content',
  templateUrl: './vote-content.component.html',
  styleUrls: ['./vote-content.component.css']
})
export class VoteContentComponent implements OnInit {
  entryNum: any;
  allPeople: any;

  timer: any[] = [];
  // 统计选择同意的人数
  selectData: string = "0/4";
  constructor(
    public sonService:SonService
  ) { }
  // 父级传过来的数据
  ngOnInit() {
    //拿到数据和条目
    this.allPeople= this.sonService.allPeople
    this.entryNum = this.sonService.entryNum 
  }
  // 统计选择同意的人数
  select(value) {
    console.log(value)
    this.selectData = `${value[0]}/${this.allPeople.length}`
    // if (this.sonService.entryValue[0].allPeople)

    //代办
    var a = this.sonService.entryValue[0].allPeople.filter(obj => obj.name == value[1])
    console.log(a)

    this.timer.push(value)
    
  }
}
