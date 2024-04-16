import { Component, input } from '@angular/core';
import { FeedChildComponent } from '../feed-child/feed-child.component';

@Component({
  selector: 'app-feed-post',
  standalone: true,
  imports: [FeedChildComponent],
  templateUrl: './feed-post.component.html',
  styleUrl: './feed-post.component.css',
})
export class FeedPostComponent {
  n = input.required<number>();
}
