import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterRepository } from '@ngneat/elf-ng-router-store';
import { Observable, map } from 'rxjs';
import { FeedViewComponent } from '../../feed-view/feed-view.component';

@Component({
  selector: 'app-course-feed',
  standalone: true,
  imports: [AsyncPipe, FeedViewComponent],
  templateUrl: './course-feed.component.html',
  styleUrl: './course-feed.component.css',
})
export class CourseFeedComponent {
  data$: Observable<{ courseID: string }>;

  constructor(routerRepository: RouterRepository) {
    this.data$ = routerRepository
      .selectParams('courseID')
      .pipe(map((courseID) => ({ courseID })));
  }
}
