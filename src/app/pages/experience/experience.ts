import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {
  items() {
    return [
       {
        role: 'Associate DevOps Engineer',
        company: 'Biz2Credit (Biz2x)',
        duration: 'Sep 2025 – Present',
        location: 'Remote / India',
        description: [
          'Implemented CI/CD pipelines using Jenkins and Kubernetes to ensure high availability of application.',
          'Collaborated with multiple teams to troubleshoot issues and reduce downtime.',
          'Developed monitoring and alerting solutions using Prometheus and Grafana.'
        ]
      },
      {
        role: 'Trainee Software Engineer',
        company: 'Mphasis Limited',
        duration: 'Feb 2025 – May 2025',
        location: 'Remote / India',
        description: [
          'Developed a wealth management onboarding portal using Spring Boot and Angular, streamlining client and relationship manager onboarding.',
          'Implemented mapping, notifications, and data exchange verification through the portfolio module.',
          'Built a responsive UI with integrated APIs for efficient client data management and workflow automation.'
        ]
      },
      {
        role: 'Full Stack Developer',
        company: 'GKMIT',
        duration: 'May 2024 – July 2025',
        location: 'Remote / Client Project',
        description: [
          'Developed and deployed a full-featured e-commerce website for a client, significantly enhancing their online presence and sales.',
          'Built a responsive and interactive front-end using React.js and Tailwind CSS to ensure a seamless user experience across all devices.'
        ]
      },
      {
        role: 'Personal Projects',
        company: 'Self-Developed',
        duration: '2024 – Present',
        location: 'Agra, India',
        description: [
          "Developed 'Quiz Easy', a full-stack quiz app using Next.js 14 that generates interactive quizzes with the Google Gemini API.",
          'Built features like multi-mode gameplay (MCQ, open-ended), real-time scoring, and quiz history, deploying the app on Vercel.',
          'Created a personal portfolio website utilizing React.js, Framer-motion, and Three.js to showcase technical skills.',
          'Designed a user-friendly interface with smooth animations, ensuring a responsive design for both desktop and mobile devices.'
        ]
      }
    ];
  }

}
