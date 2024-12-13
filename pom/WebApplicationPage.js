import { expect } from '@playwright/test';

export default class WebApplicationPage {
    constructor(page) {
        this.page = page;

        this.mainHeader = page.locator('.bg-white h1');
        this.toDoColumn = page.locator('.inline-flex >div').nth(0);
        this.toDoListOfTasks = this.toDoColumn.locator('div h3');;
        this.toDoFirstContainer = page.locator('.gap-3 > div').nth(0);
        this.featureTagFromToDoFirstTask = this.toDoFirstContainer.getByText('Feature');
        this.highPriorityTagFromToDoFirstTask = this.toDoFirstContainer.getByText('High Priority');
        this.toDoSecondContainer = page.locator('.gap-3 > div').nth(1);
        this.bugTagFromToDoSecondTask = this.toDoSecondContainer.getByText('Bug', { exact: true });

        this.inProgressColumn = page.locator('.inline-flex >div').nth(1);
        this.inProgressListOfTasks = this.inProgressColumn.locator('div h3');
        this.inProgressFirstContainer = page.locator('.gap-3 > div').nth(2);
        this.designTagFromThirdTask = this.inProgressFirstContainer.getByText('Design', { exact: true });
        this.mobileApplicationBtn = page.getByRole('button', { name: 'Mobile Application' });
    }

    async verifyToDoListHas(listItem) {
        const toDoListText = await this.toDoListOfTasks.allInnerTexts();
        const actualResult = toDoListText.filter((el) => el == listItem).join();
        expect(actualResult).toEqual(listItem);
    }

    async clickMobileApplicationBtn() {
        await this.mobileApplicationBtn.click();
    }
}
