export default class BasePage{
async wait(time){

    await page.waitFor(time);

}
async getTitle(time){

    return await page.title();

}
async getUrl(time){

    return await page.url();

}
}