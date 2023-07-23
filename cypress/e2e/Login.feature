Feature: Login Page

    I want to login this app

Scenario: Login to instacart "https://www.saucedemo.com/"

    Given I am on the Login Page
    When I enter username as 'standard_user'
    And I enter password as 'secret_sauce'
    And I click on login button
    Then I enter into the website
    And I confirm the Products page 
