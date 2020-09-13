export class DashboardPage{
  baseUrl = 'http://localhost:4200/dashboard';
  go(){
    cy.visit(this.baseUrl);
  }

  calenderItem(dayIndex:number,i:number){
    return cy.get(`[data-test-id=calendar-item-${dayIndex}-${i}]`);
  }
}
