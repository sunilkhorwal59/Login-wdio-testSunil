class LoginPage {
    get inputEmail() { return $('#username'); }
    get inputPassword() { return $('#password'); }
    get btnSignIn() { return $('button[type="submit"]'); }
    get flashMessage() { return $('#flash'); }

    async open() {
        await browser.url('https://the-internet.herokuapp.com/login');
        await this.inputEmail.waitForExist({ timeout: 10000 });
    }

    async login(email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }
}

module.exports = new LoginPage();
