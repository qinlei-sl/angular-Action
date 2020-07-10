import { SonService } from './../../service/son.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-content-each',
  templateUrl: './content-each.component.html',
  styleUrls: ['./content-each.component.css']
})
export class ContentEachComponent implements OnInit {
  disabled: Boolean = false;
  nodisabled: Boolean = false;
  userData: any;
  @Input()
  set user(text: any) {
    this.userData = !text ? "啥都没有给我" : text;
  };
  @Output() child = new EventEmitter();
  constructor(
    public sonService:SonService
  ) { }

  ngOnInit() {
    //使用缓存内容
    if (this.sonService.entryValue[0].allPeople[this.userData[1]].agree == true) {
      this.nodisabled = this.sonService.entryValue[0].allPeople[this.userData[1]].agree
    }
  }
  tick() {
    this.nodisabled = true;
    var a
    a = this.sonService.tick(this.userData[1], this.userData[2])
    this.child.emit([a,this.userData[0].name,true])
  }
  notick() {
    this.disabled = true;
    this.sonService.notick(this.userData[1], this.userData[2])
  }
}
