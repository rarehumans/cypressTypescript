# cypressTypescript
This repository contains a Cypress framework integrated with Cucumber and TypeScript for end-to-end testing.
**Prerequisites**
Node.js (v12 or higher)
npm or yarn (latest version)
Cypress (installed via npm)

**Installation**
Clone the repository:
git clone <repository_url>
Navigate to the project directory:
cd <project_directory>
Install the dependencies:
npm install
Running Tests
Open Cypress Test Runner, To open the Cypress Test Runner, use the following command:
npx cypress open

**Folder Structure**
cypress.config.ts: Cypress configuration file.
cypress/: Contains all the Cypress tests, plugins, support files, and more.
integration/: Contains feature files and step definitions.
pages/: Contains page objects.
support/: Custom commands, support utilities, and more.
fixtures/: Test data files.
package.json: Project's dependencies and scripts.
