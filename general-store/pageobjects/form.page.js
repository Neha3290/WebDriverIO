const { AppiumDriver } = require('appium/build/lib/appium');

/**
 * sub page containing specific selectors and methods for a specific page
 */

class FormPage{
    /**
     * define selectors using getter methods
     */
   
    
    get nameField () {
        return $('#nameField');
    }

 
    get countryList () {
        return $('.android.widget.Spinner');
    }


    get genderMale () {
        return $('#radioMale');
    }


    get genderFemale () {
        return $('#radioFemale');
    }


    get btnSubmit () {
        return $('#btnLetsShop');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    async setName(name){
        
        await this.nameField.setValue(name);
    }

    async setGender(gender){
        if(gender=='Male'){await this.genderMale.click();
        }else{await this.genderFemale.click()}
    }

   
    async setCountry(country){
        await this.countryList.click();
        const selector = 'new UiSelector().className("android.widget.TextView").text(country)'
        const countryOption = await $(`android=${selector}`)
        await countryOption.click()
        //await $(android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView(country));
    }

    async submitForm(){
        await this.btnSubmit.click()
    }



}

module.exports = new FormPage();
