import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {
    FormBuilder,
    FormsModule,
    FormControl,
    FormGroup,
  } from '@angular/forms';
import { Cert } from '../entities/cert.entity';
import { Role } from '../entities/role.entity';
import { CertService } from '../services/cert.service';
import { RoleService } from '../services/role.service';
import { Employee } from '../entities/employee.entity';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './demo9.component.html',
  imports: [FormsModule, ReactiveFormsModule]
})
export class Demo9Component implements OnInit {
  registerForm: FormGroup;
  certs: Cert[];
  roles: Role[];
  photo: File;
  constructor (
    private formBuilder: FormBuilder,
    private certService: CertService,
    private roleService: RoleService
  ){}
  
  ngOnInit(){
    this.certs = this.certService.getCerts();
    this.roles = this.roleService.getRoles();
    this.registerForm = this.formBuilder.group({
      username: 'abc',
      password: 'xyz',
      description: '',
      gender: '',
      certId: '2',
      status: true,
      roleId: '3',
      id: 123,
      address: this.formBuilder.group({
        street: 'abc',
        ward: 'xyz',
      }),
    });
  }
  selectPhoto(event: any) {
    this.photo = event.target.files[0];
  }
  save() {
    console.log('save');
    let employee: Employee = this.registerForm.value as Employee;
    if (this.photo != null) {
      employee.photo = this.photo.name;
    } else {
      employee.photo = 'noimage';
    }

    console.log(employee);
  }
  title = "Demo 9"
}
