import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true, // since you are using `imports`
  imports: [MatIconModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
