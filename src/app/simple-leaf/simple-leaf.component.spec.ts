import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleLeafComponent } from './simple-leaf.component';

describe('SimpleLeafComponent', () => {
  let component: SimpleLeafComponent;
  let fixture: ComponentFixture<SimpleLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleLeafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
