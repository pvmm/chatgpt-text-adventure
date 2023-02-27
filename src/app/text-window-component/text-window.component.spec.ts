import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextWindowComponentComponent } from './text-window-component.component';

describe('TextWindowComponentComponent', () => {
  let component: TextWindowComponentComponent;
  let fixture: ComponentFixture<TextWindowComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextWindowComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextWindowComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
