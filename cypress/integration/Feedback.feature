Feature: Feedback yousee
    
    Logged in user can send a Feedback

    Scenario: Logged user can send a feedback
        Given The user is logged in
        When The user click on Giv os feedback button
        Then The user is able to enter text and send it
        