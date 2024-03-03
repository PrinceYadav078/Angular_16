import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { PopularComponent } from './home/popular/popular.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CanActivate } from './auth.guard';

const routes: Routes = [
  {path:'',component:HomeComponent},
  // {path:'',component:LoginComponent},
  {path:'Login',component:LoginComponent},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'Courses',component:CoursesComponent},
  // {path:'Courses/Course/:id', component:CourseDetailComponent},
  {path:'Courses',children:[
    {path:'Course/:id',component:CourseDetailComponent, canActivate:[CanActivate]},
    {path:'Popular', component:PopularComponent, canActivate:[CanActivate]},
    {path:'Checkout',component:CheckoutComponent, canActivate:[CanActivate]}
  ]},
  {path:'Login',component:LoginComponent},
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
