const LoginPage = require('../pageobjects/LoginPage');

describe('Demo Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(LoginPage.flashMessage).toBeExisting();
        const message = await LoginPage.flashMessage.getText();
        expect(message).toContain('You logged into a secure area!');
    });
});
