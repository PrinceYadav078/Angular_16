import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../Model/course';
import { CourseService } from '../Services/course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  AllCourses: Course[] = [];
  coursesService = inject(CourseService);
  searchString: string;
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  isCourses:boolean=false;
  ngOnInit() {
    // this.searchString=this.activeRoute.snapshot.queryParams['search'];
    // this.searchString=this.activeRoute.snapshot.queryParamMap.get('search');
    // console.log(this.searchString)

    this.activeRoute.queryParamMap.subscribe((data) => {
      this.searchString = data.get('search');
      if (
        this.searchString === '' ||
        this.searchString === undefined ||
        this.searchString === null
      ) {
        // this.AllCourses = this.coursesService.courses;
        this.AllCourses= this.activeRoute.snapshot.data['courses'];
      } else {
        this.AllCourses = this.coursesService.courses.filter((course) => {
          return course.title
            .toLowerCase()
            .includes(this.searchString.toLowerCase());
        });
        if(this.AllCourses.length==0){
          this.isCourses=true
        }
      }
    });
  }
}
