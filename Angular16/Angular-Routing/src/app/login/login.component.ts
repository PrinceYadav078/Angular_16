import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  inject,
} from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);
  activeRoute:ActivatedRoute=inject(ActivatedRoute);

  ngOnInit(){
    this.activeRoute.queryParamMap.subscribe((queries)=>{
      const logout= Boolean(queries.get('logout'))
      if(logout){
        this.authService.logout();
        alert("you are now logged out. islogged=> "+this.authService.isLogged)
      }
    })
    
  }

  onLoginClicked() {
    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    const user = this.authService.login(username, password);

    if (user === undefined) {
      alert('The login credential you have entered is not correct.');
      
    } else {
      alert('welcome ' + user.name + ' you are logged in.');
      this.router.navigate(['/Courses'])
    }
  }
}
