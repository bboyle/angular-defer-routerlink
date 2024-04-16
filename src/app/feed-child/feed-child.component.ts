import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feed-child',
  standalone: true,
  // FIXME: remove MatTooltipModule to fix the bug
  imports: [RouterLink, MatTooltipModule],
  templateUrl: './feed-child.component.html',
  styleUrl: './feed-child.component.css',
})
export class FeedChildComponent {}
