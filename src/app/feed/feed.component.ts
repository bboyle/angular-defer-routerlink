import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeedChildComponent } from '../feed-child/feed-child.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterLink, FeedChildComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {}
