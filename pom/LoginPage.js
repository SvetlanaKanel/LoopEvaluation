export default class LoginPage{
    constructor(page){
        this.page = page;

        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.signInBtn = page.getByRole('button', {name: 'Sign in'});
    }

    async fillUsernameInput(name) {
        await this.usernameInput.fill(name);
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password);
    }

    async clickSignInBtn() {
        await this.signInBtn.click();
    }
}