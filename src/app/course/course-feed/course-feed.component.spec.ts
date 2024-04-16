import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseFeedComponent } from './course-feed.component';

describe('CourseFeedComponent', () => {
  let component: CourseFeedComponent;
  let fixture: ComponentFixture<CourseFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
