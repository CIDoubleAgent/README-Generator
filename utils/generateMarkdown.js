// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    if (license === 'Apache 2.0') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GPL v2') {
        return '![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)';
    } else if (license === 'GPL v3') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
    if (license === 'Apache 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL v2') {
        return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    } else if (license === 'GPL v3') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
    if (license === 'Apache 2.0') {
        return `   Copyright [yyyy] [name of copyright owner]

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
     
          http://www.apache.org/licenses/LICENSE-2.0
     
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`;
    } else if (license === 'GPL v2') {
        return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    } else if (license === 'GPL v3') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Liscense](#liscense)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## How to contribute
  ${data.contribution}
  ## Tests
  ${data.tests}
  ## Liscense
  * Link: ${renderLicenseLink(data.license)}  
  
  ${renderLicenseSection(data.license)}
  ## Questions
  * ${data.github}
  * ${data.email}
  `;
}

module.exports = generateMarkdown;
