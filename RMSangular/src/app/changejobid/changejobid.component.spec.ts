import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangejobidComponent } from './changejobid.component';

describe('ChangejobidComponent', () => {
  let component: ChangejobidComponent;
  let fixture: ComponentFixture<ChangejobidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangejobidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangejobidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
