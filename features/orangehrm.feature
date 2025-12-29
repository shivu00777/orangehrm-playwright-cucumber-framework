Feature: OrangeHRM Employee Management

  Scenario: Add and delete employee using Playwright with Cucumber
    Given I open the OrangeHRM application
    When I login with username "Admin" and password "admin123"
    Then I should see the dashboard page

    When I navigate to PIM module
    Then I should see the PIM page

    When I add a new employee with first name "swati" and last name "kanojia"
    Then I should see the personal details page

    When I update nationality and gender
    Then I should see a success toast message

    When I search for employee "swati"
    Then I should see employee in the result table

    When I delete the employee
    Then I should see employee deleted successfully

    When I logout from the application
    Then I should be redirected to login page
