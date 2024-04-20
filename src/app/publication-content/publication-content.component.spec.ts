import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationContentComponent } from './publication-content.component';

describe('PublicationContentComponent', () => {
  let component: PublicationContentComponent;
  let fixture: ComponentFixture<PublicationContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicationContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublicationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
