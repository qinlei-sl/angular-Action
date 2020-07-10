import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Entry } from '../models/entry';
import { voteData } from '../voteData';

@Injectable({
  providedIn: 'root'
})
export class FatherServiceService {
  private entrySubject: BehaviorSubject<any>;
  public entry: Observable<Entry>;
  constructor() {
    this.entrySubject = new BehaviorSubject<any>(voteData)
    this.entry = this.entrySubject.asObservable();
  }
  public get entryValue(): Entry {
    return this.entrySubject.value;
  }
  addvalue(value) {
    voteData.push(...value)
    // console.log(this.entrySubject.value)
  }
}
