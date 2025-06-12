import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {DiscGolfListComponent} from "./disc-golf-list.component";
import {Disc} from "./disc";

describe('DiscGolfListComponent', () => {
  let component: DiscGolfListComponent;
  let fixture: ComponentFixture<DiscGolfListComponent>;

  const mockDiscs: Disc[] = Array.from({ length: 50 }, (_, i) => ({
    name: `Disc ${i + 1}`,
    manufacturer: 'Innova',
    type: 'Putter',
    plastic: 'DX',
    weight: 175,
  }));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DiscGolfListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiscGolfListComponent);
    component = fixture.componentInstance;
    component.discs = mockDiscs;
    fixture.detectChanges(); // triggers ngOnInit
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should load initial batch of discs', () => {
    expect(component.visibleDiscs.length).toBe(component.batchSize);
  });

  it('should render correct number of table rows for visible discs', () => {
    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.batchSize);
  });

  it('should load more discs when loadMore is called', () => {
    const initialCount = component.visibleDiscs.length;
    component.loadMore();
    fixture.detectChanges();
    expect(component.visibleDiscs.length).toBe(initialCount + component.batchSize);
  });

  it('should not load more than total discs', () => {
    while (component.currentIndex < mockDiscs.length) {
      component.loadMore();
    }
    component.loadMore(); // Try once more
    expect(component.visibleDiscs.length).toBe(mockDiscs.length);
  });

  it('should show fallback row when no discs are provided', () => {
    component.discs = [];
    component.visibleDiscs = [];
    fixture.detectChanges();

    const emptyRow = fixture.debugElement.query(By.css('tbody tr td[colspan="5"]'));
    expect(emptyRow.nativeElement.textContent).toContain('No discs found');
  });
});
