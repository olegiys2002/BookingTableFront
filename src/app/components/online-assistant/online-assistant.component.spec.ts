import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineAssistantComponent } from './online-assistant.component';

describe('OnlineAssistantComponent', () => {
  let component: OnlineAssistantComponent;
  let fixture: ComponentFixture<OnlineAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlineAssistantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlineAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
