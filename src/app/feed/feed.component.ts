import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeedPostComponent } from '../feed-post/feed-post.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterLink, FeedPostComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {}
