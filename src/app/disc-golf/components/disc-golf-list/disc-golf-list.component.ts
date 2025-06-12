import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableModule} from "@angular/material/table";
import {Disc} from "./disc";
import {DiscDataService} from "../../services/disc-data.service";

@Component({
  selector: 'app-disc-golf-list',
  imports: [
    MatTableModule,
  ],
  templateUrl: './disc-golf-list.component.html',
  styleUrl: './disc-golf-list.component.css',
  standalone: true,
})
export class DiscGolfListComponent implements OnInit, AfterViewInit {
  @Input() discs: Disc[] = [];
  visibleDiscs: Disc[] = [];
  batchSize = 20;
  currentIndex = 0;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('loadMoreTrigger', { static: false }) loadMoreTrigger!: ElementRef<HTMLDivElement>;

  private observer!: IntersectionObserver;

  constructor(private _discDataService: DiscDataService) {}

  ngOnInit(): void {
    this._discDataService.getDiscData()
      .subscribe((discs: Disc[]) => { this.discs = discs; });

    this.loadMore();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        this.loadMore();
      }
    });

    this.observer.observe(this.loadMoreTrigger.nativeElement);
  }

  private loadMore(): void {
    if (this.currentIndex >= this.discs.length) return;

    const nextBatch = this.discs.slice(this.currentIndex, this.currentIndex + this.batchSize);
    this.visibleDiscs = [...this.visibleDiscs, ...nextBatch];
    this.currentIndex += this.batchSize;
  }
}
