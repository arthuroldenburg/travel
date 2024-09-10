import { Component } from '@angular/core';
import { Login, Register } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login: Login = {
    email: '',
    password: '',
  };

  user: Register = {
    email: '',
    password: '',
    username: '',
    phone: '',
    birthYear: '',
    role: 'USER',
  };

  constructor(private authService:AuthService, private router:Router, private route:ActivatedRoute){}

  onLogin(){
    this.authService.login(this.login).subscribe({
      next: (res:any) => {
        localStorage.setItem("token_angular", res.access_token);
        const route = this.route.snapshot.queryParamMap.get("stateUrl") || '';
        this.router.navigateByUrl(route);
      },
      error:() => alert("user or password invalid!")
    })
  }

  onRegister(){
    this.authService.register(this.user).subscribe({
      next: (res:any) => {

      },
      error: () => alert("WRONG! DO IT AGAIN")
    })
  }
}
