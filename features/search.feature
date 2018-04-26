@search
Feature: Search in google
  In order to be able search in google different data  
  As an user 
  I need to be able to analyze results

  Scenario: User can search Selenium and validate more than 25000000 results 
    Given I open google 
    When I fill search bar with "Selenium"
    And I click on search button
    Then I see page with more than "25000000" results

  Scenario: User can search España and validate less than 900000000 results
    Given I open google 
    When I fill search bar with "España"
    And I click on search button
    Then I see results page with less than "900000000" results

  Scenario: User can search Madrid and validate less than 1000000 results
    Given I open google 
    When I fill search bar with "Madrid"
    And I click on search button
    Then I see results page with less than "1000000" results

  Scenario: User can search Selenium and validate results 
    Given I open google 
    When I fill search bar with "Selenium"
    And I click on search button
    Then I see page with less than "10" results

  Scenario: User can search Selenium using i am feeling lucky
    Given I open google 
    When I fill search bar with "Selenium"
    And I click on i am feeling lucky button
    Then I see selenium page with title is "Selenium - Web Browser Automation"