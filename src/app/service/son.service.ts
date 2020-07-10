import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Entry } from '../models/entry';
import { voteData } from '../voteData';

@Injectable({
  providedIn: 'root'
})
export class SonService {
  //条目里面的数据
  allPeople: any;
  //条目几
  entryNum: any;
  private entrySubject: BehaviorSubject<any>;
  public entry: Observable<Entry>;
  constructor() {
    this.entrySubject = new BehaviorSubject<any>(voteData)
    this.entry = this.entrySubject.asObservable();
    
  }
  public get entryValue(): Entry {
    return this.entrySubject.value;
  }
  obtain(value) {
    this.allPeople = this.entrySubject.value[value].allPeople
    this.entryNum = value
  }
  // 判断是否同意
  tick(value, index) {
    this.entrySubject.value[index].allPeople[value].agree = true;
    var array = this.entrySubject.value[index].allPeople;
    var k = 0;
    console.log(this.entrySubject.value)
    for (let index = 0; index < array.length; index++) {
      // console.log(array[index].agree)
      if (array[index].agree == true) {
        k++
      }
    }
    return k
  }
  notick(value, index) {
    // console.log(index, value)

    this.entrySubject.value[index].allPeople[value].agree = false;


  }
}
