import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewoneuserComponent } from './viewoneuser.component';

describe('ViewoneuserComponent', () => {
  let component: ViewoneuserComponent;
  let fixture: ComponentFixture<ViewoneuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewoneuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewoneuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
