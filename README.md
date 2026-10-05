# OrangeHRM UI Automation

Playwright browser automation using JavaScript, Cucumber BDD, Gherkin, Page Object Model, and Allure reporting.

## Requirements

- Node.js 20 or later
- Java 17 or later to generate the Allure HTML report

## Setup

```bash
npm ci
npx playwright install chromium
```

## Run

```bash
npm test
npm run test:smoke
```

The smoke scenario signs in with the OrangeHRM demo administrator, verifies the dashboard, and signs out. Defaults are `Admin` / `admin123`. Override them with `ORANGEHRM_USERNAME` and `ORANGEHRM_PASSWORD`; set `BASE_URL` to target another environment. Set `HEADLESS=false` to show the browser.

## Allure report

```bash
npm run report:generate
npm run report:open
```

Cucumber writes raw results to `allure-results/`. GitHub Actions generates the HTML report even after test failures and uploads both result and report directories as the `orangehrm-allure-report` artifact.

## Continuous integration

The workflow runs on pushes and pull requests targeting `main` or `master`, and can also be started manually from the Actions tab. It installs Chromium, runs the smoke scenario, generates an Allure report, and retains its artifacts for 14 days.