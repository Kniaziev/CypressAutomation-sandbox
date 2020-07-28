Feature: Login yousee

    The user want to Log in into yousee and The user is only able to Log in with valid credentials

    Scenario: Base Login
        When The user open Home page
        Then Home page contains Log ind button

    Scenario: Login page details
        Given The user open Home page
        When The user click on Log in button
        Then Log in popup is displayed


    Scenario: Email and password are mandatory fields
        Given The user open Home page
        When The user click on Log in button
        Then Can not log in without password, Log ind button is not active
        And Can not log in with empty email and password


    # # @smoke this is a tag for run only some of scenarios with  npx cypress-tags run -e TAGS='@smoke'
     Scenario: Valid password and username required for Login
         Given The user open Home page
         When The user click on Log in button
         When The user enter valid login and invalid password
         Then Error message is displayed

    Scenario: User is logged in with valid credentials
         Given The user open Home page
         When The user click on Log in button
         When The user enter valid login and valid password
         Then The user is logged in
        