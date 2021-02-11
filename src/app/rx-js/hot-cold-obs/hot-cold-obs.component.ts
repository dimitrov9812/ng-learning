import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-hot-cold-obs',
  templateUrl: './hot-cold-obs.component.html',
  styleUrls: ['./hot-cold-obs.component.css']
})
export class HotColdObsComponent implements OnInit {
  public observable = fromEvent(document, 'mousemove');
  public widthObs = fromEvent(window, 'resize');
  public arr: string[] = [];
  public widthArr: string[] = [];

  constructor() { }

  ngOnInit(): void {
      let subscription = this.observable.pipe(debounceTime(300)).subscribe((val: any) => {
        this.arr.push(val);
        // Unsubscribe from document mousemove
        if (this.arr.length > 10) {
          subscription.unsubscribe();
        }
      });

      let widthSubscription = this.widthObs.subscribe((val: any) => {
        this.widthArr.push(val);
        // Unsubscribe from width change observable
        if (this.widthArr.length > 10) {
          widthSubscription.unsubscribe();
        }
      });
  }
}
