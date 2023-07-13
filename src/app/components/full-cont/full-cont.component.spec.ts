import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullContComponent } from './full-cont.component';

describe('FullContComponent', () => {
  let component: FullContComponent;
  let fixture: ComponentFixture<FullContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullContComponent]
    });
    fixture = TestBed.createComponent(FullContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
