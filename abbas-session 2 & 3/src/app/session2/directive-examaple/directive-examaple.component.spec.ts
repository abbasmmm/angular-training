import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExamapleComponent } from './directive-examaple.component';

describe('DirectiveExamapleComponent', () => {
  let component: DirectiveExamapleComponent;
  let fixture: ComponentFixture<DirectiveExamapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveExamapleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExamapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
