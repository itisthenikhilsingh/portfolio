import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projectcard',
  imports: [CommonModule],
  templateUrl: './projectcard.html',
  styleUrl: './projectcard.css'
})
export class Projectcard {
  @Input() title="";
  @Input() details="";
  @Input() link="";
  @Input() reff="";
}
