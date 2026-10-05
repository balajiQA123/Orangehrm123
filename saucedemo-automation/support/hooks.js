const fs = require('node:fs/promises');
const path = require('node:path');
const { Before, After, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const config = require('../config/environment');
const LoginPage = require('../pages/LoginPage');
const AdminPage = require('../pages/AdminPage');
const PIMPage = require('../pages/PIMPage');
const LeavePage = require('../pages/LeavePage');
const TimePage = require('../pages/TimePage');
const RecruitmentPage = require('../pages/RecruitmentPage');
const MyInfoPage = require('../pages/MyInfoPage');
const PerformancePage = require('../pages/PerformancePage');
const DashboardPage = require('../pages/DashboardPage');
const DirectoryPage = require('../pages/DirectoryPage');
const MaintenancePage = require('../pages/MaintenancePage');
const ClaimPage = require('../pages/ClaimPage');
const BuzzPage = require('../pages/BuzzPage');
const CheckoutPage = require('../pages/CheckoutPage');
const SauceDemoLoginPage = require('../pages/SauceDemoLoginPage');

setDefaultTimeout(30_000);

const modulePageConstructors = {
  Admin: AdminPage,
  PIM: PIMPage,
  Leave: LeavePage,
  Time: TimePage,
  Recruitment: RecruitmentPage,
  MyInfo: MyInfoPage,
  Performance: PerformancePage,
  Dashboard: DashboardPage,
  Directory: DirectoryPage,
  Maintenance: MaintenancePage,
  Claim: ClaimPage,
  Buzz: BuzzPage,
};

function safeScenarioName(name) {
  return name.replace(/[^a-z0-9_-]+/gi, '-').replace(/^-|-$/g, '');
}

Before(async function ({ pickle }) {
  this.scenarioId = safeScenarioName(`${pickle.name}-${pickle.id}`);
  this.browser = await chromium.launch({ headless: config.headless });
  this.context = await this.browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: 'videos' },
  });
  await this.context.tracing.start({ screenshots: true, snapshots: true, sources: true });
  this.page = await this.context.newPage();
  this.pages = {
    login: new LoginPage(this.page),
    sauceDemoLogin: new SauceDemoLoginPage(this.page),
    checkout: new CheckoutPage(this.page),
    modules: Object.fromEntries(
      Object.entries(modulePageConstructors)
        .map(([name, PageConstructor]) => [name, new PageConstructor(this.page)]),
    ),
  };
});

After(async function ({ result }) {
  if (!this.context) {
    return;
  }

  const failed = result?.status === 'FAILED';
  const screenshotPath = path.join('screenshots', `${this.scenarioId}.png`);
  const tracePath = path.join('traces', `${this.scenarioId}.zip`);

  try {
    if (failed && this.page && !this.page.isClosed()) {
      await fs.mkdir(path.dirname(screenshotPath), { recursive: true });
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
      await this.attach(await fs.readFile(screenshotPath), 'image/png');
    }
  } finally {
    try {
      await this.context.tracing.stop({ path: tracePath });
    } finally {
      await this.context.close();
      await this.browser?.close();
    }
  }
});

module.exports = { modulePageConstructors };
