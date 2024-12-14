import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { LOGIN, PAGE, COLUMN, TASKS, TAGS } from '../testData';

test.describe('Mobile Application', () => {
    test.beforeEach(async ({ page, loginPage, webApplicationPage, mobileApplicationPage }) => {
        await page.goto('/');
        await loginPage.fillUsernameInput(LOGIN.username);
        await loginPage.fillPassword(LOGIN.password);
        await loginPage.clickSignInBtn();
        await webApplicationPage.clickMobileApplicationBtn();
        await mobileApplicationPage.mainHeader.waitFor();
        await expect(mobileApplicationPage.mainHeader).toHaveText(PAGE[1]);
    });

    test('TC_04 | Verify "Push notification system" is in the "To Do" column and has "Feature" tag', async ({
        mobileApplicationPage,
    }) => {
        expect(await mobileApplicationPage.toDoColumn).toContainText(COLUMN[0]);
        expect(await mobileApplicationPage.toDoListOfTasks).toContainText(TASKS.task4);
        await mobileApplicationPage.featureTagFromToDoFirstTask.waitFor();
        expect(await mobileApplicationPage.featureTagFromToDoFirstTask).toHaveText(TAGS[0]);
    });

    test('TC_05 | Verify "Offline mode" is in the "In Progress" column and has "Feature" & "High Priority” tags', async ({
        mobileApplicationPage,
    }) => {
        expect(await mobileApplicationPage.inProgressColumn).toContainText(COLUMN[1]);
        expect(await mobileApplicationPage.inProgressListOfTasks).toContainText(TASKS.task5);
        await mobileApplicationPage.featureTagFromInProgressFirstTask.waitFor();
        expect(await mobileApplicationPage.featureTagFromInProgressFirstTask).toHaveText(TAGS[0]);
        await mobileApplicationPage.highPriorityTagFromInProgressFirstTask.waitFor();
        expect(await mobileApplicationPage.highPriorityTagFromInProgressFirstTask).toHaveText(TAGS[1]);
    });

    test('TC_06 | Verify "App icon design" is in the "Done" column and has "Design" tag', async ({
        mobileApplicationPage,
    }) => {
        expect(await mobileApplicationPage.doneColumn).toContainText(COLUMN[2]);
        expect(await mobileApplicationPage.doneListOfTasks).toContainText(TASKS.task6);
        await mobileApplicationPage.designTagfromDoneFirstTask.waitFor();
        expect(await mobileApplicationPage.designTagfromDoneFirstTask).toHaveText(TAGS[3]);
    });
});
