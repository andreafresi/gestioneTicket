import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamiListComponent } from './reclami-list.component';

describe('ReclamiListComponent', () => {
  let component: ReclamiListComponent;
  let fixture: ComponentFixture<ReclamiListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamiListComponent]
    });
    fixture = TestBed.createComponent(ReclamiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
