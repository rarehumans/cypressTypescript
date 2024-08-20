export class CreateAccountPage {
  
    visitMagentoApp() {
      cy.visit('https://magento.softwaretestingboard.com');
    }
  
    clickCreateAccountLink() {
      cy.get('a[href*="/customer/account/create/"]').first().click();
    }
  
    fillFirstName(firstName: string) {
      cy.get('#firstname').type(firstName);
    }
  
    fillLastName(lastName: string) {
      cy.get('#lastname').type(lastName);
    }
  
    fillEmail(email: string) {
      cy.get('#email_address').type(email);
    }
  
    fillPassword(password: string) {
      cy.get('#password').type(password);
    }
  
    fillConfirmPassword(confirmPassword: string) {
      cy.get('#password-confirmation').type(confirmPassword);
    }
  
    fillRegistrationForm(firstName: string, lastName: string, email: string, password: string, confirmPassword: string) {
      this.fillFirstName(firstName);
      this.fillLastName(lastName);
      this.fillEmail(email);
      this.fillPassword(password);
      this.fillConfirmPassword(confirmPassword);
    }
  
    clickRegistrationButton() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    verifyConfirmationMessage(message: string) {
      cy.contains(message).should('be.visible');
    }
  }
  
  export const createAccountPage = new CreateAccountPage();
  