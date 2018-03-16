import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVaComponent } from './template-va.component';

describe('TemplateVaComponent', () => {
  let component: TemplateVaComponent;
  let fixture: ComponentFixture<TemplateVaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateVaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateVaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
