import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  public firstSubjectArr: string[] = [];

  public firstSubject: Subject<string> = new Subject();

  constructor() { }

  ngOnInit(): void {
    let observer1 = this.firstSubject.subscribe(
      (val) => this.firstSubjectArr.push("First: " + val),
      (error) => this.firstSubjectArr.push("First: " + error),
    );

    this.firstSubject.next("HEY");

    let observer2 =this.firstSubject.subscribe(
      (val) => this.firstSubjectArr.push("Second: " + val),
      (error) => this.firstSubjectArr.push("Second: " + error),
    );

    this.firstSubject.next("How are you?");
    this.firstSubject.next("FIne Thanks");

    observer1.unsubscribe();

    this.firstSubject.next("Are You Still Here?");
    this.firstSubject.next("Im getting lonely out here");
  }

  ngOnDestroy() {
    this.firstSubject.unsubscribe();
  }
}
