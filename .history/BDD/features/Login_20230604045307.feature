Feature: Login

    Scenario: User can't login with invalid credincials
        Given Open Profile Page
        When Enter Invalid credincials
        Then An error displayed 

        Scenario: User login with valid credincials
        Given Open Profile Page
        When Enter valid credincials
        Then Hom 