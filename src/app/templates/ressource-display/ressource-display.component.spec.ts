import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RessourceDisplayComponent } from './ressource-display.component';

describe('RessourceDisplayComponent', () => {
  let component: RessourceDisplayComponent;
  let fixture: ComponentFixture<RessourceDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RessourceDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RessourceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
