import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitCardComponent } from './recruit-card.component';

describe('RecruitCardComponent', () => {
  let component: RecruitCardComponent;
  let fixture: ComponentFixture<RecruitCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecruitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
