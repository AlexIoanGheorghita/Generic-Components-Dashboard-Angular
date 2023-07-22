# Generic Components Dashboard

This is a project that revolves around the reusability of components in Angular, trying to create components that are generic and as less hard-coded as possible. You can take a look at all the generic components inside the `src/app/shared` folder. The `src/app/components` folder contains larger components, such as pages, that incorporate generic components.

In addition, another goal of this project was to use as many features of Angular as possible. This application, for example, implements authentication (without a server-side, using local storage and mock users) through services, guards, etc. Almost all features and main components of Angular that you can think of have been used in this project: services, pipes, directives, dynamic component loaders, guards, and others.

Finally, for the aesthetic of the project, the Angular Material library was used.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

You may need to install some libraries and dependencies, therefore you should also run `npm install`.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
