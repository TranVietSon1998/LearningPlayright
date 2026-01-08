import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
  xPathUserName = "#username";
  xPathPassword = "#password";
  xPathLogin = "#login";

  constructor(page: Page) {
    super(page);
  }

  async navigateToLoginPage() {
    await this.navigateTo("url_login_page");
  }
  async authentication(name: string, pass: string) {
    await this.page.locator(this.xPathUserName).fill(name);
    await this.page.locator(this.xPathPassword).fill(pass);
    await this.page.locator(this.xPathLogin).click();
  }
}
