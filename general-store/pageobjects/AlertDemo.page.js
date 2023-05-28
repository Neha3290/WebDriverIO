const ActionHelper = require('../helpers/ActionHelper');
require('chai').should();

class AlertDemo {

     getObjectLocator() {
        const platform = browser.capabilities.platformName.toLowerCase();
        return require(`./../screens/${platform}/alert.screen.js`);
    }

     openAlertDemoApp() {
        ActionHelper.launchApp();
        //ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

     selectMenuAndSubMenu(menuOption, submenuOption){
        const menu = menuOption.toLowerCase()+"Menu";
        const subMenu = submenuOption.toLowerCase()+"Submenu";
        console.log(menu);
        console.log(subMenu);
        ActionHelper.click(this.getObjectLocator().menu);
        ActionHelper.click(this.getObjectLocator().subMenu);
        

    }

     openAlert(alertOption){
        ActionHelper.click(this.getObjectLocator().alertOption);
    }

     acceptOrCancelAlert(choice){
        const alertRes = choice.toLowerCase()+"AlertBtn";
        if(choice=="ok"){
        ActionHelper.click(this.getObjectLocator().okAlertBtn);
        }else if(choice=="cancel"){
            ActionHelper.click(this.getObjectLocator().cancelAlertBtn);
        }else{
            ActionHelper.click(this.getObjectLocator().otherAlertBtn);
        }

    }

     verifyAlertTitle(title){
        ActionHelper.getText(this.getObjectLocator().alertTitle).should.equal(title);
    }

}

module.exports = AlertDemo;
