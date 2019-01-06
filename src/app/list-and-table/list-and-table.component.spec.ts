import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAndTableComponent } from './list-and-table.component';

describe('ListAndTableComponent', () => {
  let component: ListAndTableComponent;
  let fixture: ComponentFixture<ListAndTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAndTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAndTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
