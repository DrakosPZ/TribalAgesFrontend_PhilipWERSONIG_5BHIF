import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionRessourceTemplateComponent } from './production-ressource-template.component';

describe('ProductionRessourceTemplateComponent', () => {
  let component: ProductionRessourceTemplateComponent;
  let fixture: ComponentFixture<ProductionRessourceTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionRessourceTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionRessourceTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
