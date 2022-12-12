export interface User {
    email: string,
    password: string,
    role?: string
}

export type LoggedInUser = Pick<User, 'email' | 'role'>;

export interface LoginError {
    message: string
}
