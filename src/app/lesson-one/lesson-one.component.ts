import { Component, OnInit } from '@angular/core';
import { from, Observable, Observer, timer } from 'rxjs';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['./lesson-one.component.css']
})
export class LessonOneComponent implements OnInit {
  public stringArray: string[] = [];
  public secondStringArray: string[] = [];
  public fromArray: string[] = [];
  public countToTen: number[] = [];
  public timer = timer(10,1000);
  public arrObs: Observable<string> = new Observable<string>();
  public countToTenTimeout: Observable<string> = new Observable<string>((observer) => {
      observer.next("WILL EMMIT ANOTHER VALUE IN 500ms");
  });
  private observable: Observable<string> = new Observable<string>((observer) => {
    try {
      observer.next("HEY 1");
      // throw new Error(); => commented (if error handling needs to be tested uncomment this)
      observer.next("HEY 2");
      observer.complete();
      observer.next("HEY 3");
    } catch (err: any) {
      observer.error('ERROR')
    }
  });

  constructor() { }

  ngOnInit(): void {
    let observer = this.observable.subscribe((val: string) => {
      this.stringArray.push(val); // will fire on each next call
    },
    (val: string) => {this.stringArray.push(val)}, // will fire if we have an error
    () => {
      this.stringArray.push("COMPLETED!") // will fire when the observable is completed
    });

    let secondObserver = this.observable.subscribe((val: string) => {
      this.secondStringArray.push(val); // will fire on each next call
    },
    (val: string) => {this.secondStringArray.push(val)}, // will fire if we have an error
    () => {
      this.secondStringArray.push("COMPLETED!") // will fire when the observable is completed
    });

    //
    this.arrObs = from(['1','2','3','4','5','6','7','8','9','10']);

    let arrObserver = this.arrObs.subscribe((val) => {
      this.fromArray.push(val);
    });

    let countToTenObs = this.timer.subscribe((val) => {
      this.countToTen.push(val);
      if (this.countToTen.length == 11) {
        this.countToTen = [];
      }
    });

    setTimeout(() => {
      console.log("TIME ENDED");
      observer.unsubscribe();
      arrObserver.unsubscribe();
    }, 5000);
  }
}
