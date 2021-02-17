import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeHtmlComponent } from './shape-html.component';

describe('ShapeHtmlComponent', () => {
  let component: ShapeHtmlComponent;
  let fixture: ComponentFixture<ShapeHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShapeHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
