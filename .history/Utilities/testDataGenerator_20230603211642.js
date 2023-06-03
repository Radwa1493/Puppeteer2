export default class BasePage{
    async wait(time){

 //Text Generator
 const gandamtext = await page.evaluate(() => {
    var text = "";
      var charset = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
      return text;     
     
  });    
    }



}