import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WardAndBlockComponent } from './ward-and-block.component';

describe('WardAndBlockComponent', () => {
  let component: WardAndBlockComponent;
  let fixture: ComponentFixture<WardAndBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WardAndBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WardAndBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
