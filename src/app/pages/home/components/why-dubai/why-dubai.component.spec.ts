import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyDubaiComponent } from './why-dubai.component';

describe('WhyDubaiComponent', () => {
  let component: WhyDubaiComponent;
  let fixture: ComponentFixture<WhyDubaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyDubaiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyDubaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
