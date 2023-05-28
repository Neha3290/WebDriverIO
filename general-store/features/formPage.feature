Feature: Filling Form scenarios

  Scenario Outline: Filling form with valid data
    When I enter name as <username>
    And I enter country as <countryName>
    And I enter gender as <gender>
    And I submit the form
    Then Form should submit successfully and we should reach at cart page

    Examples:
      | username | countryName | gender |
      | Ram      | Argentina   | male   |