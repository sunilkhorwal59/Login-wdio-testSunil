# WebdriverIO Login Automation Framework

This project is a sample automation framework using WebdriverIO (WDIO) with the Page Object Model (POM) design pattern. It demonstrates automated login testing for the demo site [the-internet.herokuapp.com](https://the-internet.herokuapp.com/login), and includes Allure reporting integration.

## Features
- WebdriverIO with Mocha test runner
- Page Object Model structure
- Allure reporting for test results
- Sample login test scenario

## Project Structure
```
project-root/
│
├── test/
│   ├── pageobjects/
│   │   └── LoginPage.js
│   └── specs/
│       └── login.e2e.js
├── wdio.conf.js
├── package.json
├── allure-results/
├── allure-report/
└── README.md
```

## How to Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Run the test suite:
   ```sh
   npx wdio run wdio.conf.js
   ```
3. Generate and view the Allure report:
   ```sh
   npx allure generate allure-results --clean -o allure-report
   npx allure open allure-report
   ```

## GitHub & CI Integration
- Initialize a git repository and push to GitHub.
- Integrate with Jenkins or other CI tools for automated test execution and reporting.

## Author
Sunil Kumar
