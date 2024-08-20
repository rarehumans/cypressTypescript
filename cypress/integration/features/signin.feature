Feature: User Login

Scenario: User logs in with the newly created account
    Given User visit the Magento app
    When User click on the Login link
    And User fill the login details
      | Email    | random_6df1czyw@yopmail.com |
      | Password  | Alpha@638|
    And User click on login button
    Then User should login successfully