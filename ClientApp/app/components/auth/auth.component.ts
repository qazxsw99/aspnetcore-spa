
import { Component } from '@angular/core';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
    selector: 'auth-container',
    styleUrls: ['./auth.component.css'],    
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    user = {
        password: '',
        email: ''
    };

    mode: string = 'Signin';
    linkText: string = 'Don\'t have an account?';

    constructor(private auth: AuthService, private router: Router) { }

    changeMode() {
        if (this.mode === 'Signin') {
            this.mode = 'signup'
            this.linkText = 'Already have an account?'
        } else {
            this.mode = 'Signin';
            this.linkText = 'Don\'t have an account?';
        }
    }

    authenticate() {        
        this.auth.authenticate(this.mode, this.user)
            .subscribe(() => this.router.navigate(['']))
    }
}
