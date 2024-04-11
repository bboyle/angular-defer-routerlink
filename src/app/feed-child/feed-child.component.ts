import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed-child',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './feed-child.component.html',
  styleUrl: './feed-child.component.css',
})
export class FeedChildComponent {}
