import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FocusMonitor} from '@angular/cdk/a11y';
import validate = WebAssembly.validate;
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  user: any;

  userForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userForm;
  }

  submit() {
    let user = this.userForm.value;
    this.userService.createNewUser(user).subscribe(() => {
      console.log(user);
      alert("Created successfully");
    }, () => {
      alert("Not created")
    });
  }

}
