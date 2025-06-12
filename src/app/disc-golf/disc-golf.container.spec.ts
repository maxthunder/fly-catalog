import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscGolfContainer } from './disc-golf.container';

describe('DiscGolfComponent', () => {
  let component: DiscGolfContainer;
  let fixture: ComponentFixture<DiscGolfContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscGolfContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscGolfContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
