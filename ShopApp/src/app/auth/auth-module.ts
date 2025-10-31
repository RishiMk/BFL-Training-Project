import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,LoginComponent,RegisterComponent]
})
export class AuthModule {}