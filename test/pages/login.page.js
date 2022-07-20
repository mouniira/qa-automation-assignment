const Page = require('./page');

// sub page containing specific selectors and methods for a specific page
class LoginPage extends Page {
    // Define selectors using getter methods
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    // A method to encapsule automation code to login
    async login (admin, password) {
        await this.inputUsername.setValue(admin);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // Overwrite specific options to adapt it to page object
    open (url) {
        return super.open(url);
    }
}

module.exports = new LoginPage();
