import { DashboardPage } from '../support/pages/dashboard.page'
import '../support/index';  // Initialize Firebase instance
import { auth } from 'firebase/app'

describe('Dashboard Page',()=>{
  const dashboard = new DashboardPage();

  beforeEach(()=>{
    const email = 'victoriamsunny@gmail.com';
    const password = '12345678';
    auth().signInWithEmailAndPassword(email,password);
    //may put in clear function later?
    // dashboard.calenderItem(1,3).click();
  })

  it('should select times and persist',()=>{
      dashboard.go();
      dashboard.calenderItem(1,3).click();
    dashboard.calenderItem(1,3)
      .should('have.css', 'background-color','rgb(115, 188, 255)' )

  })
})
