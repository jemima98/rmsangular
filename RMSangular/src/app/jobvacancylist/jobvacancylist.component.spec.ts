import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobvacancylistComponent } from './jobvacancylist.component';

describe('JobvacancylistComponent', () => {
  let component: JobvacancylistComponent;
  let fixture: ComponentFixture<JobvacancylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobvacancylistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobvacancylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
