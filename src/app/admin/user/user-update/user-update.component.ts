import { Component, OnInit } from '@angular/core';
import {Category} from '../../../model/category';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {User} from '../../../model/user';
import {UserService} from '../../../service/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {

  user: User;

  userForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private userService: UserService,
              private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      // @ts-ignore
      this.findUserById(id);
    });
  }

  ngOnInit() {
  }

  findUserById(id: number) {
    this.userService.findById(id).subscribe(value => {
      // @ts-ignore
      this.user = value.data;
      this.userForm = new FormGroup({
        name: new FormControl(this.user),

      });
    });
  }

  updateUser(id?: number) {
    let user = this.userForm.value;
    console.log(user);
    this.userService.updateCategory(id, user).subscribe(() => {
        alert('Created successfully');
      },
      () => alert('Not created')
    );
  }

}
