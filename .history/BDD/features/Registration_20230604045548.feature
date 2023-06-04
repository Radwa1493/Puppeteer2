Feature: Registra,on 

    Scenario: User can't login with invalid credincials
        Given Open Profile Page
        When Open Registration Page
        And Fill New user data
        Then Homepage displayed  
        And New user created

