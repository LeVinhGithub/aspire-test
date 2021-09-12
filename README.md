# aspire-test

## Summary
- This framework use maven to manage the library with pom.xml file
- Project was devided into 2 part: main java and test
  - main java:
    - common method: common method for element and browser with selenium library
    - helper: extent report, path, datetime, driver factory,...
    - config: timeout, url,...
  - test
    - repository: common locator and specific one of each pages
    - page object: OOP
    - test case: Write with clear step, can use BDD language when defining the name of steps.
    - test suite: can run cross browsers
- Use TestNG Testing framework to manage the test suite. There are 3 test suites to run.
- Resolve for special cases:
  - Dropdown is not select-option type
  - Dropdown checkbox: need to scroll because of the lazy load of page.
  - OTP box input
  - Date time picker
