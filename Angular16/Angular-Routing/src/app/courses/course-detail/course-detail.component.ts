import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit{
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(){
    // this.courseId= this.activeRoute.snapshot.params['id']
    this.courseId=+this.activeRoute.snapshot.paramMap.get('id')  // + sign convert the stringtype value to number type
    // console.log(this.courseId)
    this.selectedCourse=this.courseService.courses.find((course)=>{
      return course.id === this.courseId
    })
    // console.log(this.selectedCourse)
      
    
  }
}
