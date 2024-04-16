import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionLineComponent } from './description-line.component';

describe('DescriptionLineComponent', () => {
  let component: DescriptionLineComponent;
  let fixture: ComponentFixture<DescriptionLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DescriptionLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
