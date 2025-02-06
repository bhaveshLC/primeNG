import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../core/service/Course/course.service';
import { ButtonModule } from 'primeng/button';
import { iCourse } from '../../core/model/interface';
import { CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [ButtonModule, CommonModule, CurrencyPipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {
  courseId: string = '';
  route = inject(ActivatedRoute);
  course: iCourse | null = null;
  module: any[] = [];
  courseService = inject(CourseService);
  ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id')!;
    this.getCourseDetails();
  }
  getCourseDetails() {
    this.courseService.getCourseById(this.courseId).subscribe((data) => {
      this.course = data.course;
      this.module = data.module;
      console.log(this.course);
    });
  }
}
