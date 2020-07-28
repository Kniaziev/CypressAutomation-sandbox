Feature: Search playback yousee
    
    Logged in user can perform a search and start playback from search results

    Scenario: Logged user can perform a search
        Given The user is logged in
        When The user perform a search
        Then The user is able to start playback from search results
        