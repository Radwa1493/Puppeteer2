export default class BasePage{
async wait(time){

    await page.waitFor(time);

}
async getTitle(){

    return await page.title();

}
async getUrl(){

    return await page.url();

}

async ScrolltoElement(e){

  const element = document.getElementById('my-element');
  element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
}

}