import { inject, Injectable } from '@angular/core';
import { HttpService } from '../Http/http.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}
  httpService = inject(HttpService);
  getCourses() {
    return this.httpService.get('/course');
  }
  getCourseById(id: string) {
    return this.httpService.get(`/course/${id}`);
  }
}
