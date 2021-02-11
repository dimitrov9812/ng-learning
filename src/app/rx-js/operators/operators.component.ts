import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { map, pluck, skipUntil } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit {
  public arr: string[] = [];
  public mapArr: number[] = [];
  public pluckArr: string[] = [];
  public skipArr: number[] = [];
  public startString: string = "STOPPED!";

  public firstObs: Observable<string> = new Observable<string>((observer) => {
    observer.next("HELLO FROM FIRST");
  });

  public secondObs: Observable<string> = new Observable<string>((observer) => {
    observer.next("HELLO FROM SECOND");
  });

  public mapObs: Observable<number> = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(7);
    observer.next(12);
  });

  public pluckObs: Observable<any> = new Observable<any>((observer) => {
    observer.next({firstName: "Alexander", lastName: "Dimitrow"});
    observer.next({firstName: "Alexander", lastName: "Petrov"});
    observer.next({firstName: "Alexander", lastName: "Ivanov"});
    observer.next({firstName: "Alexander", lastName: "Georgiev"});
  });

  public skipObs: Observable<any> = new Observable<any>((observer) => {
    let i = 1;
    setInterval(() => {
      observer.next(i++);
    }, 1000);
  })

  public skipSubject: Subject<string> = new Subject;

  constructor() { }

  ngOnInit(): void {
    var mergedObs = merge(this.firstObs, this.secondObs);
    let subscription = mergedObs.subscribe((val: string) => {
      this.arr.push(val);
    });

    let mapSubscription = this.mapObs.pipe(map((x) => Math.pow(x,2))).subscribe((val: number) => {
      this.mapArr.push(val);
    });

    let pluckSubscription = this.pluckObs.pipe(pluck('lastName'), map((x: string) => x.toUpperCase())).subscribe((val: string) => {
      this.pluckArr.push(val);
    });

    // subject
    let newObs = this.skipObs.pipe(skipUntil(this.skipSubject)).subscribe((val) => {
      if (this.skipArr.length == 10) {
        this.skipArr = [];
      }
      this.skipArr.push(val);
    });

    let subjObs = this.skipSubject.subscribe((val) => {
      this.startString = val;
    });

    setTimeout(() => {
      this.skipSubject.next("Start the count!");
    }, 3000);
  }
}
