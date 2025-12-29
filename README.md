🧪 OrangeHRM Automation Framework
Playwright + Cucumber (BDD)

This repository contains an end-to-end automation testing framework built using Playwright with Cucumber (BDD).
The framework automates core workflows of the OrangeHRM application using Cucumber feature files and step definitions, where UI interactions are handled directly within step definitions.

🚀 Tech Stack
Language: JavaScript (Node.js)

Automation Tool: Playwright

BDD Framework: Cucumber

Assertions: Playwright Test Assertions

Version Control: Git & GitHub

📁 Project Structure
orangehrm-playwright-cucumber-framework/
│
├── features/
│   └── orangehrm.feature
│
├── step-definitions/
│   └── orangehrm.steps.js
│
├── cucumber.js
├── package.json
├── package-lock.json
└── .gitignore


✅ Automated Test Scenario
The framework automates the following end-to-end workflow:

Launch OrangeHRM application

Login with valid credentials

Navigate to PIM module

Add a new employee

Update employee nationality and gender

Search for employee

Delete employee

Logout from application


⚙️ Prerequisites
Make sure you have the following installed:

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
Run tests with default settings:

npm test


Run tests with browser visible:

npm run headed


🧠 Framework Highlights
✔ BDD approach using Cucumber (Gherkin syntax)
✔ Real application automation (OrangeHRM)
✔ Clear and readable step definitions
✔ URL-based and UI-based validations
✔ Beginner-friendly Cucumber + Playwright setup
✔ GitHub version-controlled automation project


📌 Sample Feature File
Feature: OrangeHRM Employee Management

Scenario: Add and delete employee using Playwright with Cucumber
  Given I open the OrangeHRM application
  When I login with username "Admin" and password "admin123"
  Then I should see the dashboard page


👨‍💻 Author
Shivam Sharma
QA / SDET Automation Engineer
GitHub: https://github.com/shivu00777

📈 Future Enhancements
Refactor framework using Page Object Model (POM)

Add Cucumber HTML reporting

Add GitHub Actions CI pipeline

Add Hooks (Before / After)

Enable parallel execution

Externalize environment configurations

⭐ If you find this project useful, feel free to star the repository!
