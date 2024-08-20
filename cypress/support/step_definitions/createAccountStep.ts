import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { generateRandomEmail } from '../commands';
import { createAccountPage } from '../../integration/pages/createAccountPage';

Given('User visit the Magento app', () => {
  createAccountPage.visitMagentoApp();
});

When('User click on the Create Account link', () => {
  createAccountPage.clickCreateAccountLink();
});

When('User fill the registration form', (dataTable: any) => {
  const randomEmail = generateRandomEmail();
  const data = dataTable.rowsHash();
  createAccountPage.fillRegistrationForm(data.FirstName, data.LastName, randomEmail, data.Password, data.ConfirmPassword);
});

When('User click on the registration button', () => {
  createAccountPage.clickRegistrationButton();
});

Then('User should login with this message {string}', (message: string) => {
  createAccountPage.verifyConfirmationMessage(message);
});
