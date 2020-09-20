// <reference types="cypress" />

import { HomePage } from "../support/pages/home.page";
import '../support/index';  // Initialize Firebase instance
import { auth } from 'firebase/app'

describe('Home Page', () => {
  const home = new HomePage();

  beforeEach(() => {
    auth().signOut();
  })

  // it('should be loaded when you go to it', () => {
  //   home.go();
  //   cy.url().should('eq', 'http://localhost:4200/signin');
  // })

  it('should bring user to their corresponding page if credentials are entered', () => {
    const email = 'victoriamsunny@gmail.com';
    const password = '12345678';

    home.go();
    home.emailAddress().type(email);
    home.password().type(password);
    home.login().click();

    cy.url().should('eq','http://localhost:4200/dashboard');
  })
})
