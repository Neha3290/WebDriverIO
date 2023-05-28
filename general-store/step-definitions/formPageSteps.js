const { Given, When, Then } = require('@wdio/cucumber-framework');

const FormPage = require('../pageobjects/form.page');

const pages = {
    form: FormPage
}

When(/^I enter name as (\w+)$/,async (page) => {
    await FormPage.setName("Ram");
   
});

When(/^I enter gender as (\w+)$/,async (page) => {
    await FormPage.setGender("Female");
   
});

When(/^I enter country as (\w+)$/,async (page) => 
{
    await FormPage.setCountry("Argentina");   
});

When(/^I submit the form$/,async (page) => 
{
    await FormPage.submitForm();
});

Then(/^Form should submit successfully and we should reach at cart page$/,async (page) => 
{
    
});

