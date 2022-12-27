import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLoggerComponent } from './my-logger.component';

describe('MyLoggerComponent', () => {
  let component: MyLoggerComponent;
  let fixture: ComponentFixture<MyLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLoggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
