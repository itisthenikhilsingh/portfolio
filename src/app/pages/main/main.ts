import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Navbar } from '../../shared/components/navbar/navbar';
import { About } from '../about/about';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  imports:[Navbar,About,RouterOutlet],
  styleUrls: ['./main.css']
})
export class Main implements OnInit {
  heading: string = '';

  // Route → Heading map
  private headingsMap: { [key: string]: string } = {
    '/': 'About me',
    '/resume': 'Resume',
    '/about': 'About',
    '/experience': 'Experience',
    '/projects': 'Projects',
    '/contact': 'Contact'
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.heading = this.headingsMap[event.urlAfterRedirects] || '';
      }
    });
  }
}
