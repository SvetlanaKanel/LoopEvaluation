import WebApplicationPage from "./WebApplicationPage";

export default class MobileApplicationPage extends WebApplicationPage{
    constructor(page) {
        super(page);

        this.featureTagFromInProgressFirstTask = this.inProgressFirstContainer.getByText('Feature');
        this.highPriorityTagFromInProgressFirstTask = this.inProgressFirstContainer.getByText('High Priority');
        this.doneColumn = page.locator('.inline-flex >div').nth(3);
        this.doneListOfTasks = this.doneColumn.locator('div h3');
        this.doneFirstContainer = this.doneColumn.locator('.gap-3 > div').nth(0);
        this.designTagfromDoneFirstTask = this.doneFirstContainer.getByText('Design', {exact: true})
    }
}