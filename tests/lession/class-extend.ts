import { Page } from "@playwright/test";

export class BasePage {
  protected page: Page;
  protected xpathDashboard = "#dashboard";

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }
}

class LoginPage extends BasePage {
  protected xpathDashboard = "#dashboard2";
  constructor(page: Page) {
    super(page);
  }
}
