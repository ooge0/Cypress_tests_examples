Feature Login

  I want to log into Coundult website

  Scenario: Condult Login act-1
    Given I open Condult login page
    When I type in username and password
    And I click on Sing in button
    Then Your feed should be shown

  Scenario: Condult Login act-2
    Given I open Condult login page
    When I type in
      |username |  password |
      |test012345 | test012345@gmail.com|
    And I click on Sing in button
    Then "Your feed" should be shown