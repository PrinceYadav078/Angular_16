import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Model/course';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  selectedCourse: Course;
  courseId: number;

  courseService: CourseService = inject(CourseService);
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  paramMapObs;

  ngOnInit() {
    // this.courseId= this.activeRoute.snapshot.params['id']
    // this.courseId=+this.activeRoute.snapshot.paramMap.get('id')  // + sign convert the stringtype value to number type
    // console.log(this.courseId)

    // this.activeRoute.params.subscribe((data) => {
    //   this.courseId = data['id'];
    //   this.selectedCourse = this.courseService.courses.find((course) => {
    //     return course.id == this.courseId;
    //   });
    //   // console.log(this.selectedCourse)
    // });

    this.paramMapObs = this.activeRoute.paramMap.subscribe((data) => {
      this.courseId = +data.get('id'); // + sign convert the stringtype value to number type
      this.selectedCourse = this.courseService.courses.find((course) => {
        return course.id === this.courseId;
      });
      // console.log(this.selectedCourse)
    });
  }

  ngOnDestroy() {
    this.paramMapObs.unsubscribe();
  }
}
