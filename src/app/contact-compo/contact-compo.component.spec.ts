import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCompoComponent } from './contact-compo.component';

describe('ContactCompoComponent', () => {
  let component: ContactCompoComponent;
  let fixture: ComponentFixture<ContactCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
