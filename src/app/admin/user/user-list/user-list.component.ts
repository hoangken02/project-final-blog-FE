import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any;

  displayedColumns: string[] = ['id', 'username', 'firstname', 'lastname', 'email', 'role', 'createdAt', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private serviceUser: UserService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.serviceUser.getAll().subscribe(value => {
      this.users = value;
      console.log(this.users.data);
      this.users = new MatTableDataSource(this.users.data);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }
}
