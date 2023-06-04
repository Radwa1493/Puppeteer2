Feature: Login

    Scenario: User can't login with invalid credincials
        Given Open Registration Page
        When Enter Invalid credincials
        Then An error displayed 

