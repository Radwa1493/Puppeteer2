Feature: Login

    Scenario: New user Registraion 
        Given Open Profile Page
        When Open Registration Page
        And Fill New user data
        Then Login status flag displayed
        And Open Profile Page
        And Logout


#    Scenario: User can't login with invalid credincials
#        Given Open Profile Page
#        When Enter Invalid credincials
#        Then An error displayed 

    Scenario: User login with valid credincials
        Given Open Profile Page
        When Enter valid credincials
        Then Login status flag displayed

