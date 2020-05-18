# Recipe and shopping list app (Angular)

This project was built using [Angular 9](https://angular.io/).

Authentication and data storage utilizes [Firebase](https://firebase.google.com/).

## Getting started

### Clone the repo

```shell
git clone https://github.com/B3Pop/recipe-angular.git
cd recipe-angular
```

### Install dependencies

```shell
npm install
```

### Set up backend

1. Create a new project in Firebase.
2. Create a Realime Database named **recipes**.
3. Enable Email/Password authentication.
4. Set read/write rules for the database. Ex:

```shell
{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
```

### Configuration

Set your Firebase URL and API key values in the environments files (environment.ts and environment.prod.ts).

### Run development server

```shell
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build --prod` to create a production build of the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

Deploy build artifacts to a static host.

### For Firebase hosting

```shell
sudo npm install -g firebase-tools
```

```shell
sudo firebase login
```

From the root of the project folder:

```shell
sudo firebase init
```

Select option for Hosting: Configure and deploy Firebase Hosting sites

Select option for Use and existing project and then select your recipe project

Public directory: `dist/recipe`

Configure as single page app? `y`

Overwrite index.html? `N`

```shell
sudo firebase deploy
```
