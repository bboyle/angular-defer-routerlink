import { AsyncPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { map, timer } from 'rxjs';
import { FeedPostComponent } from '../feed-post/feed-post.component';

@Component({
  selector: 'app-feed-view',
  standalone: true,
  imports: [AsyncPipe, FeedPostComponent],
  templateUrl: './feed-view.component.html',
  styleUrl: './feed-view.component.css',
})
export class FeedViewComponent {
  data = input<{ courseID: string }>();

  posts$ = timer(200).pipe(map(() => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
}
