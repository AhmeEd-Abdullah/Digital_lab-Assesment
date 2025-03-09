import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBtnComponent } from './global-btn.component';

describe('GlobalBtnComponent', () => {
  let component: GlobalBtnComponent;
  let fixture: ComponentFixture<GlobalBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
