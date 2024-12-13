import {test as base } from '@playwright/test';
import LoginPage from './pom/LoginPage';
import WebApplicationPage from './pom/WebApplicationPage';
import MobileApplicationPage from './pom/mobileApplicationPage';

export const test = base.extend({ 
    /** @type { LoginPage } */
    loginPage: async({ page }, use ) => {
        await use(new LoginPage(page));
    },

    /** @type { WebApplicationPage } */
    webApplicationPage: async({ page }, use ) => {
        await use(new WebApplicationPage(page));
    },

    /** @type { MobileApplicationPage } */
    mobileApplicationPage: async({ page }, use ) => {
        await use(new MobileApplicationPage(page));
    }, 
 
})