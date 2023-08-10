import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTraningsComponent } from './past-tranings.component';

describe('PastTraningsComponent', () => {
  let component: PastTraningsComponent;
  let fixture: ComponentFixture<PastTraningsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastTraningsComponent]
    });
    fixture = TestBed.createComponent(PastTraningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
