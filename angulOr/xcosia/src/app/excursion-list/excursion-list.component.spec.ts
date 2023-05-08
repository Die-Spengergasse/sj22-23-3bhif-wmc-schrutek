import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionListComponent } from './excursion-list.component';

describe('ExcursionListComponent', () => {
  let component: ExcursionListComponent;
  let fixture: ComponentFixture<ExcursionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcursionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcursionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
