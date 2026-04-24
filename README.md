# 🧪 Playwright E2E Tests – SauceDemo

Automated end-to-end tests built with Playwright using the Page Object Model (POM) pattern.

## 🚀 Tech Stack

* Playwright (TypeScript)
* Page Object Model (POM)

## 📌 Project Overview

This project automates a basic e-commerce flow on SauceDemo:

1. User login
2. Product listing validation
3. Product selection
4. Product detail validation

The goal is to demonstrate clean test structure, reusable components, and reliable assertions.

## 🧱 Project Structure

* `tests/` → Test cases
* `pages/` → Page Object Model classes
* `playwright.config.ts` → Configuration

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
