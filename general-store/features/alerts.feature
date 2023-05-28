Feature: Alerts verification

  Scenario Outline: Verify different kinds of alert
    Given Launch app
    When I go to App Menu and then Alert Dialogues submenu
    And I click on <AlertType>
    Then Verify the alert title
    And Accept or cancel the alert based on <AcceptCancelOption>
    And Close the app
  

    Examples:
      | AlertType                                 | AcceptCancelOption |
      | OK Cancel dialog with a message           | Ok                 | 
      | OK Cancel dialog with a message           | Cancel             |
      | OK Cancel dialog with ultra long message  | Something          |




