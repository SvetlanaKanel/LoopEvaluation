import WebApplicationPage from "./WebApplicationPage";

export default class MobileApplicationPage extends WebApplicationPage{
    constructor(page) {
        super(page);

        this.pushNotificationSystemContainer = page.locator('.gap-3 > div').nth(0);
        this.inProgressFirstContainer = page.locator('.gap-3 > div').nth(1);
        this.featureTagFromInProgressFirstTask = this.inProgressFirstContainer.getByText('Feature');
        this.highPriorityTagFromInProgressFirstTask = this.inProgressFirstContainer.getByText('High Priority');
        this.doneColumn = page.locator('.inline-flex >div').nth(3);
        this.doneListOfTasks = this.doneColumn.locator('div h3');
        this.doneFirstContainer = page.locator('.gap-3 > div').nth(2);
        this.designTagfromDoneFirstTask = this.doneFirstContainer.getByText('Design', {exact: true})
    }
}