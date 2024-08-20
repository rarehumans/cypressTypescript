Feature: Account Creation 

  Scenario: User creates a new account and logs in
    Given User visit the Magento app
    When User click on the Create Account link
    And User fill the registration form
      | Field             | Value             |
      | FirstName         | Sumit           |
      | LastName          | K             |
      | Email             |                   |
      | Password          | Alpha@638     |
      | ConfirmPassword   | Alpha@638      |
    And User click on the registration button
    Then User should login with this message "Thank you for registering with Main Website Store."

  
