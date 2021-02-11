import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsRootComponent } from './rx-js-root.component';

describe('RxJsRootComponent', () => {
  let component: RxJsRootComponent;
  let fixture: ComponentFixture<RxJsRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxJsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
