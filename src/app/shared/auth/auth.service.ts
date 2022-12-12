import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { LoggedInUser, LoginError, User } from "./user.model";
import { users } from "./users";

@Injectable({ providedIn: 'root' })
export class AuthService {
    foundUser: User;
    role: string | undefined;
    user = new BehaviorSubject<LoggedInUser | null>(null);
    loginError = new BehaviorSubject<LoginError | null>(null);

    constructor(private router: Router) {}

    login(credentials: {email: string, password: string}) {
        for (let user of users) {
            if (user.email === credentials.email && user.password === credentials.password) {
                this.foundUser = user;
                break;
            }
        }

        if (!this.foundUser) {
            this.loginError.next({ message: 'Email and password mismatch' });
        } else {
            this.role = this.foundUser.role;
            this.saveToLocalStorage(<LoggedInUser>this.foundUser);
            this.user.next(<LoggedInUser>this.foundUser);
            this.router.navigate(['/']);
        }
    }

    logout(): void {
        this.clearLocalStorage();
        this.user.next(null);
        this.router.navigate(['/login']);
    }

    autoLogin(): void {
        const loadedUser: LoggedInUser = JSON.parse(<string>localStorage.getItem('user'));
        if (!loadedUser) {
            return;
        }

        this.user.next(loadedUser);
    }

    get Role() {
        return this.role;
    }

    private saveToLocalStorage(details: LoggedInUser): void {
        localStorage.setItem('user', JSON.stringify(details));
    }

    private clearLocalStorage(): void {
        if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
        }
    }

    // private readFile(file: File): Promise<string[]> {
    //     return new Promise<string[]>((resolve, reject) => {
    //         if (!file) {
    //             reject();
    //         }

    //         const reader = new FileReader();
    //         let lines = [];

    //         reader.onload = () => {
    //             lines = (<string>reader.result).split('\n');
    //             resolve(lines);
    //         }

    //         reader.readAsText(file);
    //     })
    // }
}
