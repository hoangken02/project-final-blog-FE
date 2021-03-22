import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    form: any = {};
    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = 'Login failled! Please Check username or Password';
    roles: string[] = [];
    userName: any;
    constructor() {
    }

    ngOnInit(): void {
    }

    onSubmit() {
    }
}
