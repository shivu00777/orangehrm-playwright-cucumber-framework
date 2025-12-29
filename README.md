🧪 OrangeHRM Automation Framework

Playwright + Cucumber (BDD) + Page Object Model

This repository contains an end-to-end automation testing framework built using Playwright with Cucumber (BDD) and implemented following the Page Object Model (POM) design pattern.

The framework automates critical workflows of the OrangeHRM application, including employee creation, update, search, and deletion.

🚀 Tech Stack

Language: JavaScript (Node.js)

Automation Tool: Playwright

BDD Framework: Cucumber

Design Pattern: Page Object Model (POM)

Assertion Library: Playwright Test Assertions

Version Control: Git & GitHub

📁 Project Structure
orangehrm-cucumber-playwright/
│
├── features/
│   ├── orangehrm.feature
│
├── features/step-definitions/
│   └── orangehrm.steps.js
│
├── pages/
│   ├── LoginPage.js
│   ├── DashboardPage.js
│   └── PIMPage.js
│
├── cucumber.js
├── package.json
├── package-lock.json
└── .gitignore

✅ Automated Test Scenario

The framework automates the following end-to-end flow:

Launch OrangeHRM application

Login with valid credentials

Navigate to PIM module

Add a new employee

Update employee personal details

Search employee

Delete employee

Logout from application

⚙️ Prerequisites

Node.js (v18 or above recommended)

Git

VS Code (or any IDE)

📦 Installation

Clone the repository:

git clone https://github.com/shivu00777/orangehrm-playwright-cucumber-framework.git


Navigate to project directory:

cd orangehrm-playwright-cucumber-framework


Install dependencies:

npm install


Install Playwright browsers:

npx playwright install

▶️ How to Run Tests

Run tests in default mode:

npm test


Run tests with browser visible:

npm run headed

🧠 Framework Highlights

✔ BDD approach using Cucumber (Gherkin syntax)
✔ Clean Page Object Model architecture
✔ Reusable and maintainable test code
✔ Stable locators and URL-based validations
✔ Industry-standard project structure
✔ GitHub version-controlled automation framework

📌 Sample Feature Snippet
Scenario: Add and delete employee using Playwright with Cucumber
  Given I open the OrangeHRM application
  When I login with username "Admin" and password "admin123"
  Then I should see the dashboard page

👨‍💻 Author

Shivam Sharma
QA / SDET Automation Engineer
GitHub: https://github.com/shivu00777

📈 Future Enhancements

Add Cucumber HTML reporting

Add GitHub Actions CI pipeline

Add Hooks (Before / After)

Enable parallel execution

Externalize test data & environment configs

⭐ If you find this project useful, feel free to star the repository!
