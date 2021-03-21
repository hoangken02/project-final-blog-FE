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
    name: new FormControl(''),
    name: new FormControl(''),
    name: new FormControl('')
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
      this.categoryForm = new FormGroup({
        name: new FormControl(this.user.name)
      });
    });
  }

  updateUser(id?: number) {
    let user = this.userForm.value;
    console.log(category);
    this.userService.updateCategory(id, category).subscribe(() => {
        alert('Created successfully');
      },
      () => alert('Not created')
    );
  }

}
