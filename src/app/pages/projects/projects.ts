import { Component } from '@angular/core';
import { Projectcard } from '../../shared/components/projectcard/projectcard';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [Projectcard , CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects=[
  {
    title: 'Quiz Easy',
    description: [
      'Developed a full-stack quiz app with Next.js 14 that generates interactive quizzes using the Google Gemini API.',
      'Built features like multi-mode gameplay (MCQ, open-ended), real-time scoring, and quiz history, deploying the app on Vercel.',
      'Integrated Prisma with PostgreSQL for scalable data modeling and used NextAuth for authentication.'
    ],
    image: 'project-1.png', // replace with actual path
    link: 'https://quiz-easy.vercel.app' // replace with real URL
  },
  {
    title: 'Nikhell Website',
    description: [
      'Utilized a tech stack including React.js, Framer Motion, and Three.js to develop this web application.',
      'Designed a user-friendly interface with smooth animations enhancing user experience through responsive design for both desktop and mobile devices.'
    ],
    image: 'project-2.png', // replace with actual path
    link: 'https://nikhell-website.vercel.app' // replace with real URL
  }
];

}
