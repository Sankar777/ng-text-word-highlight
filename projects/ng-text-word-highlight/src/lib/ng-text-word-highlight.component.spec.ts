import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTextWordHighlightComponent } from './ng-text-word-highlight.component';

describe('NgTextWordHighlightComponent', () => {
  let component: NgTextWordHighlightComponent;
  let fixture: ComponentFixture<NgTextWordHighlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTextWordHighlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTextWordHighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
