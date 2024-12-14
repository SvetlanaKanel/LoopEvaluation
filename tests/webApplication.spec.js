import { expect } from '@playwright/test';
import { test } from '../fixtures';
import { LOGIN, WEB_APPLICATION, PAGE, COLUMN, TASKS, TAGS } from '../testData';

test.describe('Web Application', () => {
    test.beforeEach(async ({ page, loginPage, webApplicationPage }) => {
        await page.goto('/');
        await loginPage.fillUsernameInput(LOGIN.username);
        await loginPage.fillPassword(LOGIN.password);
        await loginPage.clickSignInBtn();
        expect(await webApplicationPage.mainHeader).toHaveText(PAGE[0]);
    });

    test('TC_01 | Verify "Implement user authentication" is in the "To Do" column and has "Feature", "High Priority" tags', async ({
        webApplicationPage,
    }) => {
        expect(await webApplicationPage.toDoColumn).toContainText(COLUMN[0]);
        expect(await webApplicationPage.toDoListOfTasks.allInnerTexts()).toContain(TASKS.task1);
        await webApplicationPage.featureTagFromToDoFirstTask.waitFor();
        expect(await webApplicationPage.featureTagFromToDoFirstTask).toHaveText(TAGS[0]);
        await webApplicationPage.highPriorityTagFromToDoFirstTask.waitFor();
        expect(await webApplicationPage.highPriorityTagFromToDoFirstTask).toHaveText(TAGS[1]);
    });

    test('TC_02 | Verify "Fix navigation bug" is in the "To Do" column and has "Bug" tag', async ({
        webApplicationPage,
    }) => {
        expect(await webApplicationPage.toDoColumn).toContainText(COLUMN[0]);
        expect(await webApplicationPage.toDoListOfTasks.allInnerTexts()).toContain(TASKS.task2);
        await webApplicationPage.bugTagFromToDoSecondTask.waitFor();
        expect(await webApplicationPage.bugTagFromToDoSecondTask).toContainText(TAGS[2]);
    });

    test('TC_03 | Verify "Design system updates" is in the "In Progress" column and has "Design" tag', async ({
        webApplicationPage,
    }) => {
        expect(await webApplicationPage.inProgressColumn).toContainText(COLUMN[1]);
        expect(await webApplicationPage.inProgressListOfTasks.innerText()).toEqual(TASKS.task3);
        await webApplicationPage.designTagFromInProgressFirstTask.waitFor();
        expect(await webApplicationPage.designTagFromInProgressFirstTask).toContainText(TAGS[3]);
    });
});
