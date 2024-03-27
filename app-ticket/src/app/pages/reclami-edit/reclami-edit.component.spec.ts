import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamiEditComponent } from './reclami-edit.component';

describe('ReclamiEditComponent', () => {
  let component: ReclamiEditComponent;
  let fixture: ComponentFixture<ReclamiEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamiEditComponent]
    });
    fixture = TestBed.createComponent(ReclamiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
