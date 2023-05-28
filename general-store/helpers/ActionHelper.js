class ActionHelper {


    static async launchBrowserUrl(urlToLaunch) {
       await browser.url(urlToLaunch)
    }

    static async getTitle() {
        return await browser.getTitle();
    }

    static async launchApp() {
       await driver.launchApp();
    }

    static async launchActivity(appPackage,appActivity) {
        await driver.startActivity(appPackage,appActivity);
     }

    static async pause(seconds) {
       await browser.pause(seconds * 1000);
    }

    static async isVisible(locator) {
        return await $(locator).isDisplayed() ? true : false;
    }

    static async click(locator) {
        await $(locator).click();
    }

    static async waitForElement(locator, waitTimeInSeconds) {
        //await $(locator).waitForDisplayed(waitTimeInSeconds * 1000);
        await driver.pause(3000);
        await $(locator).waitForExist({ timeout: 5000 });
    }

    static async clearText(locator) {
       await $(locator).clearValue();
    }

    static async sendText(locator, inputText) {
        await $(locator).addValue(inputText);
    }

    static async getText(locator) {
         return await $(locator).getText();
    }

    static async getAlertText(locator) {
        return await driver.getAlertText();
   }

    static async getElementViaText(locator,text){
        return await $(locator).selectByVisibleText(text);
    }

    static async closeApp() {
        return await driver.closeApp();
   }

}

module.exports=ActionHelper;