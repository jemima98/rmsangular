import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedinterviewlistComponent } from './completedinterviewlist.component';

describe('CompletedinterviewlistComponent', () => {
  let component: CompletedinterviewlistComponent;
  let fixture: ComponentFixture<CompletedinterviewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedinterviewlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedinterviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
