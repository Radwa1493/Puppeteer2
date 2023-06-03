export default class BasePage{
async wait(time){

    await page.waitFor(time);

}
async getTitle(time){

    return await page.title();

}
async getUrl(){

    return await page.url();

}

 //Text Generator
    async TextGenerator(){
    var text = "";
      var charset = "abcdefghijklmnopqrstuvwxyz";
      for (var i = 0; i < 5; i++)
        text += charset.charAt(Math.floor(Math.random() * charset.length));
      return text;     
     


    }

}