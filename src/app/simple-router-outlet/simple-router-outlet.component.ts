import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-simple-router-outlet',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './simple-router-outlet.component.html',
  styleUrl: './simple-router-outlet.component.css',
})
export class SimpleRouterOutletComponent {}
