var chai = require('chai');  
const ActionHelper = require('../helpers/ActionHelper');
const pageActivity = require('../testData/constant')
var expect = chai.expect;    // Using Expect style
var actualAlertTitle = null;

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AlertPage{
//All Menu Locators ----
appMenu = "//*[@content-desc='App']";
accessibilityMenu ='//*[@content-desc="Accessibility"]';
animationMenu ='//*[@content-desc="Animation"]';
//All Sub-menu Locators
alertdialoguesSubmenu = "~Alert Dialogs";
actionbarSubmenu="~Action Bar";
activitySubmenu="~Activity";
//All types of alert locators
OkCancelAlertWithMsg = '//*[@content-desc="OK Cancel dialog with a message"]';
OKCancelDialogWithALongMessage= '//*[@content-desc="OK Cancel dialog with a long message"]';
OKCancelDialogWithUltraLongMessage= '//*[@content-desc="OK Cancel dialog with ultra long message"]';
//All alert title and msg locators
alertTitle = '//*[@resource-id="android:id/alertTitle"]';
//All alert accept or cancel locators
okAlertBtn = '//*[@resource-id="android:id/button1"]';
cancelAlertBtn = '//*[@resource-id="android:id/button2"]';
otherAlertBtn = '//*[@resource-id="android:id/button3"]';



    async openAlertDemoApp() {
        await ActionHelper.launchApp();
    }

    async openAlertPageUsingActivity(){
        await ActionHelper.launchActivity(pageActivity.PackageName,pageActivity.AppActivityName);
    }

     async selectMenuAndSubMenu(menu, submenu){

        const menuElement = ("//*[@content-desc='"+menu+"']");
        const subMenuElement = ("//*[@content-desc='"+submenu+"']");
        await ActionHelper.waitForElement(menuElement,2);
        await console.log()
        await ActionHelper.click(menuElement);
        await ActionHelper.waitForElement(subMenuElement,2);
        await ActionHelper.click(subMenuElement);
    }

     async openAlert(alertOption){
        const alert = ("//*[@content-desc='"+alertOption+"']");
        await ActionHelper.waitForElement(alert,2);
        await ActionHelper.click(alert);
        actualAlertTitle = await ActionHelper.getAlertText();
    }

    async verifyAlertTitle(title){
        //await ActionHelper.waitForElement(alertTitle,4);
        //await console.log("Actual title = "+ await ActionHelper.getText(this.alertTitle));
        console.log('Actual Alert Title is -> '+actualAlertTitle);
        expect(actualAlertTitle).contain(title);
        //expect(await ActionHelper.getText(this.alertTitle)).contain(title);
    }

     async acceptOrCancelAlert(choice){
        const alertRes = await choice.toLowerCase()+"AlertBtn";
        if(choice.toLowerCase()=='ok'){
        await ActionHelper.click(this.okAlertBtn);
        }else if(choice.toLowerCase()=='cancel'){
           await ActionHelper.click(this.cancelAlertBtn);
        }else{
            await ActionHelper.click(this.otherAlertBtn);
        }
    }

    async closeApp(){
        await ActionHelper.closeApp();
    }
}
module.exports = new AlertPage();
