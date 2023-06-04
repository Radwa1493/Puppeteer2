    import BasePage from './BasePage'
    const elements ={
        lgoin_Buttom:'.headerElement__icon--login',
        loginEmail_TxtBox:  '#loginEmail' ,
        loginPass_TxtBox:  '#loginPassword' ,
        submit_TxtBox:  '#login-submit' ,
        error_Txt:  '#loginEmail-error' ,
    
        registration_Buttom:'button#registerAccount'
    
     }
    export default class HomePage extends BasePage {


    async OpenProfile(){

        await page.click(".headerElement__icon--login") ;

    }

}
