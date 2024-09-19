import { Component, EventEmitter, Output } from '@angular/core';
import { Login, Register } from '../../models/login.model';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormsModule } from '@angular/forms';
import { CommonModule, formatDate } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  @Output() onCloseModel = new EventEmitter();
  login: Login = {
    email: '',
    password: '',
  };

  user: Register = {
    email: '',
    password: '',
    username: '',
    phone: '',
    birthDate: '',
    role: 'USER',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onLogin() {
    this.authService.login(this.login).subscribe({
      next: (res: any) => {
        localStorage.setItem('token_angular', res.access_token);
        const route = this.route.snapshot.queryParamMap.get('stateUrl') || '';
        this.router.navigateByUrl(route);
      },
      error: () => alert('user or password invalid!'),
    });
  }

  onRegister() {
    this.checkIfAdm();
    // this.checkBirthDate();
    this.user.phone = this.user.phone.toString();
    this.authService.register(this.user).subscribe({
      next: (res: any) => {
        console.log('RES: ' + res);
      },
      error: (e) => console.log(e),
    });
  }

  onClose() {
    this.onCloseModel.emit(false);
  }

  private checkIfAdm() {
    if (this.user.email.split(/\@|\./)[1] === 'adm') this.user.role = 'ADMIN';
  }

  // private checkBirthDate(){
  //   console.log(this.user.birthDate.split('-'));
  //   const thisYear = new Date()
  //   console.log(thisYear.getFullYear());
  //   if(Number(this.user.birthDate.split('-')[0]) > thisYear.getFullYear()){
  //     console.log(true);
  //   }
  // }
}
