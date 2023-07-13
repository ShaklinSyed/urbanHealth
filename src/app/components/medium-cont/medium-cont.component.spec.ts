import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumContComponent } from './medium-cont.component';

describe('MediumContComponent', () => {
  let component: MediumContComponent;
  let fixture: ComponentFixture<MediumContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediumContComponent]
    });
    fixture = TestBed.createComponent(MediumContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
