import {Component, OnInit} from '@angular/core';
import {Category} from '../../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../../service/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {

  category: any;

  categoryForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit(): void {
  }

  submit() {
    let category = this.categoryForm.value;
    this.categoryService.createNewCategory(category).subscribe(() => {
      console.log(category);
      alert("Created successfully");
    }, () => {
      alert("Not created")
    });
  }
}
