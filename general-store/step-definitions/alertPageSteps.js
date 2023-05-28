const { Given, When, Then } = require('@wdio/cucumber-framework');
const AlertPage = require('./../pageobjects/alert.page');
const {AlertTitle,ListDialog_AlertHeader} = require('../testData/constant');
let alertName=null;

Given(/^Launch app$/, async () => {
   await AlertPage.openAlertDemoApp();
 });

When(/^I go to App Menu and then Alert Dialogues submenu$/, async () => {
   await AlertPage.selectMenuAndSubMenu("App", "Alert Dialogs");
   
});


When(/^I click on (.*)$/, async (alert) => 
{
    alertName = alert;
    console.log("1.Alert Name is ->"+alertName);
    await AlertPage.openAlert(alert);  
   
});

Then(/^Verify the alert title$/,async () => 
{
    console.log("2.Alert Name is ->"+alertName);
    if(alertName.includes('OK Cancel dialog with a message')){
        console.log("AssertionText= "+AlertTitle);
        await AlertPage.verifyAlertTitle(AlertTitle);
    }else{
        await AlertPage.verifyAlertTitle(ListDialog_AlertHeader);
    }
});

Then(/^Accept or cancel the alert based on (\w+)$/,async (choice) => 
{
    await AlertPage.acceptOrCancelAlert(choice);
});

Then(/^Close the app$/,async () => 
{
    await AlertPage.closeApp();

});




