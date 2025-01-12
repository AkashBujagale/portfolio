import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'HireQuest',
      description:
        'A web application for job postings and job searching, featuring a user-friendly interface, full CRUD operations, and job search functionality. Tested with 500 integrated job listings for performance optimization.',
      techList: ['React', 'Tailwind CSS', 'JSON Server'],
      github: 'https://github.com/AkashBujagale/HireQuest',
      screenshot: 'https://raw.githubusercontent.com/AkashBujagale/HireQuest/main/public/screen.png',
      live: '',
    },
    {
      title: 'Employee Management System',
      description:
        'A full-stack employee management system using Angular and Spring Boot, with MySQL for the database. Allows management of employee records with CRUD operations.',
      techList: ['Angular', 'Spring Boot', 'MySQL', 'Bootstrap', 'Java'],
      github: 'https://github.com/AkashBujagale/employee-management-system',
      screenshot: 'assets/employee-management-system.png',
      live: '',
    },
    {
      title: 'PrimeEstate',
      description:
        'Designed a real estate web application with property listings, project details, photo galleries, and user profiles. Integrated maps for accurate locations, real-time chat, user authentication, and robust search functionality.',
      techList: ['React', 'MongoDB', 'Node.js', 'Express.js', 'SCSS', 'JWT', 'Prisma'],
      github: 'https://github.com/AkashBujagale',
      screenshot: 'assets/prime-estate.png',
      live: '',
    },
    {
      title: 'SD BELT',
      description:
        'Developed an IoT solution to monitor infected patients and ensure social distancing during a hackathon. Integrated thermal and UV sensors to detect proximity and trigger alerts. Approved patent holder for this project (Application No: 337359-001)',
      techList: ['IoT', 'CAD Design', 'Thermal Sensors', 'UV Sensors'],
      github: '',
      screenshot: 'assets/images.png',
      live: '',
    },
  ];

  public visibleProjects = this.projects.slice(0, 3);

  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 3
      );
    }
  }
}
