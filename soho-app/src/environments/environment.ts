// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    apiKey: "pk_test_hjBfW7Lz04N0C123vP5vQS5r00nNzLukTx",
    products: {
      monthly: "plan_FwuGHRnyYF2M4J",
      yearly: "plan_FwuBzBQuOLw4ye",
    },
    redirectUrl: "https://sohomuse-landing-page.netlify.com",
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
