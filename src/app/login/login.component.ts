import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('Login exitoso', response);
        // Guardar el token en el localStorage
        localStorage.setItem('token', response.token);
        // Redirigir al usuario a la página principal
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Error en el login', error);
        // Aquí puedes manejar los errores, por ejemplo, mostrar un mensaje al usuario
      }
    );
  }
}
