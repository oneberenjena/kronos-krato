import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceslistComponent } from './commerceslist.component';

describe('CommerceslistComponent', () => {
  let component: CommerceslistComponent;
  let fixture: ComponentFixture<CommerceslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
