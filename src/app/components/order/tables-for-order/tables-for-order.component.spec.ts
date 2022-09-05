import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesForOrderComponent } from './tables-for-order.component';

describe('TablesForOrderComponent', () => {
  let component: TablesForOrderComponent;
  let fixture: ComponentFixture<TablesForOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesForOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesForOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
