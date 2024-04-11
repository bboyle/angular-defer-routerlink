import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedChildComponent } from './feed-child.component';

describe('FeedChildComponent', () => {
  let component: FeedChildComponent;
  let fixture: ComponentFixture<FeedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
