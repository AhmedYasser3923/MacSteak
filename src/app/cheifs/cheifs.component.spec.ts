import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifsComponent } from './cheifs.component';

describe('CheifsComponent', () => {
  let component: CheifsComponent;
  let fixture: ComponentFixture<CheifsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheifsComponent]
    });
    fixture = TestBed.createComponent(CheifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
