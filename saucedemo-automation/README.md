# SauceDemo and OrangeHRM UI Automation

Browser UI automation built with Playwright, Cucumber/Gherkin BDD, and Page Object Model. It covers the OrangeHRM demo modules and the SauceDemo checkout flow.

## Requirements

- Node.js 20 or later and npm
- Java 17 or later to generate or open Allure reports

## Install and configure

```powershell
npm ci
npx playwright install chromium
Copy-Item .env.example .env
```

Edit `.env` on your machine and supply the demo account usernames and passwords for both applications. The test runner requires these values and reports the missing variable names if they are not set. `.env` is ignored by Git; do not commit credentials, tokens, or secrets. For CI, provide credentials through the CI platform's secret store instead.

Environment variables configure application URLs, account credentials, the deliberately invalid password used by the negative-login test, browser mode, and checkout test data. Checkout defaults live in `test-data/checkout.json`; environment values can override them.

## Run tests

```powershell
npm test
npm run test:bdd
npm run test:smoke
npm run test:regression
npm run test:report
```

`@smoke` covers a successful OrangeHRM login/logout and the SauceDemo checkout. `@regression` runs the login validation and application-module scenarios.

## Reports and diagnostics

Cucumber writes its HTML report to `reports/cucumber-report.html` and raw Allure results to `reports/allure-results/`.

```powershell
npm run allure:generate
npm run allure:open
```

Allure HTML is generated in `reports/allure-report/`. `npm run test:report` runs the complete suite and generates the Allure report. Failed scenarios save screenshots to `screenshots/`; Playwright traces and videos are recorded in `traces/` and `videos/`. Use `HEADLESS=false` to show the browser.

Generated reports, browser artifacts, dependency directories, environment files, and local secrets are excluded by `.gitignore`.

## Project structure

| Path | Purpose |
| --- | --- |
| `features/` | Gherkin scenarios |
| `step-definitions/` | Cucumber steps |
| `pages/` | Playwright Page Objects |
| `support/` | Cucumber World and lifecycle hooks |
| `test-data/` | Reusable test data |
| `config/` | Environment configuration |
| `reports/` | Generated Cucumber and Allure reports |
| `screenshots/`, `traces/`, `videos/` | Failure and browser diagnostics |
