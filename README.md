# 🧪 Playwright E2E Tests – SauceDemo

E2E automation framework built with Playwright and TypeScript using Page Object Model (POM).

## 🚀 Tech Stack

* Playwright (TypeScript)
* Page Object Model (POM)

## 📌 Project Overview

This project automates a basic e-commerce flow on SauceDemo:

- Login validation
- Negative login scenarios
- Product navigation
- Cart functionality
- Dynamic validations
- Reusable Page Objects

The goal is to demonstrate clean test structure, reusable components, and reliable assertions.

## 🧱 Project Structure

/pages -> page objects
/helpers -> reusable helpers
/fixtures -> test data
/tests -> E2E test suites

## 🧪 Test Scenarios

* ✅ Login with valid credentials
* ✅ Validate product list is displayed
* ✅ Open first product and verify details
* ✅ Open second product and verify details
* ✅ Validate product title consistency between list and detail page

## ▶️ How to Run

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

## 🧠 Key Concepts Applied

* Page Object Model (POM)
* Dynamic data validation (no hardcoded values)
* Async/Await handling
* Locator strategies
* Test isolation

## 📈 Future Improvements

* Add negative login scenarios
* Add cart functionality tests
* Implement test data management
* CI integration (GitHub Actions)

---

## 👤 Author

QA with hands-on experience in manual testing, transitioning into automation using Playwright.

![Cart Flow](./screenshots/cart-flow1.png.jpeg)
![Cart Flow](./screenshots/cart-flow2.png.jpeg)
![Cart Flow](./screenshots/test-report.png.jpeg)