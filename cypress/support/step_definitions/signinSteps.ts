import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signInAccountPage } from '../../integration/pages/siginPage';

When('User click on the Login link', () => {
  signInAccountPage.clickLoginLink();
});

When('User fill the login details', (dataTable: any) => {
  const data = dataTable.rowsHash();
  signInAccountPage.fillLoginDetails(data.Email, data.Password);
});

When('User click on login button', () => {
  signInAccountPage.clickLoginButton();
});

Then('User should login successfully', () => {
  signInAccountPage.verifySuccessfulLogin();
});
