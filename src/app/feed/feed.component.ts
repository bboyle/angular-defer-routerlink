import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterRepository } from '@ngneat/elf-ng-router-store';
import { Observable, map } from 'rxjs';
import { FeedViewComponent } from '../feed-view/feed-view.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [AsyncPipe, RouterLink, FeedViewComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  data$: Observable<{ courseID: string }>;

  constructor(routerRepository: RouterRepository) {
    this.data$ = routerRepository
      .selectParams()
      .pipe(map(() => ({ courseID: '' })));
  }
}
