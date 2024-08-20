export class SignInAccountPage {

    clickLoginLink() {
      cy.get('a[href*="/customer/account/login/"]').first().click();
    }
  
    fillEmail(email: string) {
      cy.get('#email').type(email);
    }
  
    fillPassword(password: string) {
      cy.get('#pass').type(password);
    }
  
    fillLoginDetails(email: string, password: string) {
      this.fillEmail(email);
      this.fillPassword(password);
    }
  
    clickLoginButton() {
      cy.get("div>button[class='action login primary']>span").click();
    }
  
    verifySuccessfulLogin() {
      cy.get("div[class='field search']>div[class='control']>input[id='search']").should('be.visible');
    }
  }
  
  export const signInAccountPage = new SignInAccountPage();
  