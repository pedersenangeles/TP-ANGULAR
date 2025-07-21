import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from '../user-service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  formSignUp = new FormGroup ({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', []),
  }, [this.isMismatch]);

  constructor(private userService: UserService) {}

  isMismatch(control: AbstractControl): ValidationErrors | null{
    if(control.get('password')?.value !== control.get('confirmPassword')?.value){
      return {passwordMismatch:true};
    }
    return null;
  };

  onSubmit() {
    if (this.formSignUp.invalid) return;
    const { confirmPassword, ...userData } = this.formSignUp.value;

    this.userService.createUser(userData).subscribe({
      next: () => this.formSignUp.reset(),
      error: () => alert('Error al crear el usuario')
    });
  }

}
