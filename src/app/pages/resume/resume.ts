import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  ngOnInit() {
    // Open PDF in new tab immediately on load
    window.open('resume.pdf', '_blank');

    // Optional: Navigate back after opening (or stay on page)
    // You can also show a fallback message below
  }
}
