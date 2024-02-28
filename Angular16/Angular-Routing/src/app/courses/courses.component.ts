import { Component, inject } from '@angular/core';
import { Course } from '../Model/course';
import { CourseService } from '../Services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  AllCourses: Course[] = []
  coursesService = inject(CourseService);
  
  ngOnInit(){
    this.AllCourses=this.coursesService.courses
  }
}
