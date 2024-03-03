import { inject } from "@angular/core"
import { AuthService } from "./Services/auth.service"
import { Router } from "@angular/router";

export const CanActivate =()=>{
    const authService:AuthService=inject(AuthService);
    const router:Router=inject(Router);

    if(authService.isAuthenticated()){
        return true;
    }else{
        router.navigate(['/Login'])
        return false;
    }

}

