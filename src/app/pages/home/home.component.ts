import { Component, inject, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CourseService } from '../../core/service/Course/course.service';
import { Observable } from 'rxjs';
import { iCourse } from '../../core/model/interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  courseService = inject(CourseService);
  courses: iCourse[] = [];
  ngOnInit(): void {
    console.log('Home');
    this.courseService.getCourses().subscribe(
      (courses: any) => {
        this.courses = courses;
      },
      (err) => {
        console.error('Error fetching courses', err);
      }
    );
  }
}
