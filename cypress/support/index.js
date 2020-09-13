// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import * as firebase from 'firebase'

const config = {
  apiKey: "AIzaSyA7MIZCv2SOXt9W73ZtMkvZE3Ri1VhKwvQ",
  authDomain: "timetracker-ca7f3.firebaseapp.com",
  databaseURL: "https://timetracker-ca7f3.firebaseio.com",
  projectId: "timetracker-ca7f3",
  storageBucket: "timetracker-ca7f3.appspot.com",
  messagingSenderId: "632518520642",
  appId: "1:632518520642:web:2a24c96d1a53315ccfe2db",
  measurementId: "G-WE4XZXR8YQ"
};
firebase.initializeApp(config);
