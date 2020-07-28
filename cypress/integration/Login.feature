Feature: Login

    I want to Log in into test site

    Scenario: Base Login
        When The user open Login page
        Then Login page greets with Sign in

    Scenario: Login page details
        When The user open Login page
        Then Need an acccount links to register


    Scenario: Email and password are mandatory fields
        When The user open Login page
        Then Can not log in without password
        And Can not log in with empty email and password


    # @smoke this is a tag for run only some of scenarios with  npx cypress-tags run -e TAGS='@smoke'
    Scenario: Valid password and username required for Login
        When The user open Login page
        Then Valid username and password required
        And navigates to correct url on succesful login