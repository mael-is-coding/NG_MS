import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechTrayComponent } from './tech-tray.component';

describe('TechTrayComponent', () => {
  let component: TechTrayComponent;
  let fixture: ComponentFixture<TechTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechTrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
