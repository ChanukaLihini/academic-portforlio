import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderLineComponent } from './sub-header-line.component';

describe('SubHeaderLineComponent', () => {
  let component: SubHeaderLineComponent;
  let fixture: ComponentFixture<SubHeaderLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeaderLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubHeaderLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
