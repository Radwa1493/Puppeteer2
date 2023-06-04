Feature: Registraion 

    Scenario: New user Registraion 
        Given Open Profile Page
        When Open Registration Page
        And Fill New user data
        Then Homepage displayed  
        And New user created

