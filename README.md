nightwatch-cucumber-pom
========

This project is aimed to validate Google search feature using Gherkin.

This repository uses:

* Nightwatch.
* Nightwatch-Cucumber (enable use Gherkin style features).
* Page Object Model Implementation on Nightwatch (https://github.com/nightwatchjs/nightwatch/wiki/Page-Object-API).
* Cucumber report HTML.

## Project structure

```sh
.
├── create-html-report.js // js used to generate a HTML report for Cucumber
├── features // features directory
│   └── step_definitions // step bindings
├── nightwatch.conf.js // Nightwatch configuration file
├── package.json // Dependencies file
├── package-lock.json // Dependencies lock file
├── page_object // Page Object Model directory
└── README.md
```

## Requirements

* Java 8 JDK
* `java` and `jar` on the PATH (make sure you use `java` executable from JDK but not JRE)
* Selenium HUB
* NPM
* node.js

## Installation

Please, launch following command to install dependencies:

```sh
npm install
```

## End2End Test Suite

If you want to launch end2end test suite, write following command:

```sh
npm run e2e
```

If you want to select a specific environment, use:

```sh
npm run e2e:env pro
```

If you have your own Selenium HUB, you have to change in 'nightwatch.conf.js' line 16 to value 'false':

```sh
start_process: false,
```

## Environment

If you want to add other environment, open `nightwatch.conf.js` and add a environment at the end of the list.

Actual environments available:

* local
* production (pro)
