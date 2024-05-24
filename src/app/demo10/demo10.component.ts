import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {
    FormBuilder,
    FormsModule,
    FormControl,
    FormGroup,
    Validators,
    ReactiveFormsModule,
    AbstractControl
  } from '@angular/forms';
import { Cert } from '../entities/cert.entity';
import { Role } from '../entities/role.entity';
import { CertService } from '../services/cert.service';
import { RoleService } from '../services/role.service';
import { Employee } from '../entities/employee.entity';
import { Student } from '../entities/student.entity';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo10.component.html',
  styleUrl: './demo10.component.css',
  imports: [FormsModule, ReactiveFormsModule]
})
export class Demo10Component implements OnInit {
  registerForm: FormGroup;

  constructor (
    private formBuilder: FormBuilder,
    
  ){}
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
          this.checkUsernameValidator
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})$'
          ),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      website: [
        '',
        [
          Validators.pattern(
            /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/
          ),
        ],
      ],
      age: [
        '',
        [
          Validators.required,
          Validators.min(18),
          Validators.max(60),
          Validators.pattern('^[0-9]+$'),
        ],
      ],
      gender: [
        '',
        [
          Validators.required
        ]
      ],
      photo: ['', [
        Validators.required,

      ]]
    });
  }
  //custom validation
  checkUsernameValidator(control : AbstractControl){
    let username = control.value;
    if(username=="acc1"){
      return {
        exists : true
      }
    }
    return null;
  }
  selectFile($event: any){
    let file: File = $event.target.files[0];
    if(file.type!="image/png" && file.type!="image/jpeg" && file.type!="image/gif"){
      this.registerForm.controls['photo'].reset();
      this.registerForm.controls['photo'].setValidators([Validators.required]);
      this.registerForm.controls['photo'].updateValueAndValidity();
    }else{
      this.registerForm.controls['photo'].setValue(file.name);
    }
  }

  save() {
    let student: Student = this.registerForm.value as Student;
    console.log('>>> Form: ', student);
  }
  title = "Demo 10"
}
