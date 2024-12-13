# LoopEvaluation

**How to start working in this project?**

1. Clone repository to your machine.
2. Navigate to project root folder.
3. Run command ```npm ci``` in terminal VScode.
4. Run command ```npx playwright install``` in terminal VScode.

**How to run tests**
1. To run tests in Chrome ```npm run testUI:chrome``` in terminal VScode.
2. To run tests in Firefox ```npm run testUI:firefox``` in terminal VScode.
3. To run tests in Safari ```npm run testUI:webkit``` in terminal VScode.

**How to get playwright report**
Run command ```npm run report``` in terminal VScode

**Page Object Modal**
For each application page it is created its own class in pom folder:
    LoginPage.js
    MobileApplicationPage.js (extends base)
    WebApplicationPage.js (base)

An instance of the class is created in the fixture.js file   

Each spec.js file tests cases belonging to a different application page.