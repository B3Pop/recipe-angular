// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseApiKey = "AIzaSyD4I_7GPk9LMCb2lf84Vfgd9Sw7noc8-gQ";
const firebaseUrl = "https://ng-recipe-app-e3a23.firebaseio.com/";
// const firebaseApiKey = "YOUR_FIREBASE_API_KEY";
// const firebaseUrl = "YOUR_FIREBASE_PROJECT.firebaseio.com/";
export const environment = {
  production: false,
  firebaseApiKey,
  firebaseUrl,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
