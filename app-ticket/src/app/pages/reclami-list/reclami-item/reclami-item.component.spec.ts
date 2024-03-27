import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamiItemComponent } from './reclami-item.component';

describe('ReclamiItemComponent', () => {
  let component: ReclamiItemComponent;
  let fixture: ComponentFixture<ReclamiItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamiItemComponent]
    });
    fixture = TestBed.createComponent(ReclamiItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
