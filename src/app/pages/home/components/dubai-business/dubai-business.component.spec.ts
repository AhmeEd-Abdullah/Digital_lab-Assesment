import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubaiBusinessComponent } from './dubai-business.component';

describe('DubaiBusinessComponent', () => {
  let component: DubaiBusinessComponent;
  let fixture: ComponentFixture<DubaiBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DubaiBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DubaiBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
