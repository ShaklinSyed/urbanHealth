import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallContComponent } from './small-cont.component';

describe('SmallContComponent', () => {
  let component: SmallContComponent;
  let fixture: ComponentFixture<SmallContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallContComponent]
    });
    fixture = TestBed.createComponent(SmallContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
