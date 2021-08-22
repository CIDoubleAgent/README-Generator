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
        return `    Copyright (C) yyyy  name of author

        This program is free software; you can redistribute it and/or
        modify it under the terms of the GNU General Public License
        as published by the Free Software Foundation; either version 2
        of the License, or (at your option) any later version.
        
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
        
        You should have received a copy of the GNU General Public License
        along with this program; if not, write to the Free Software
        Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.`;
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
