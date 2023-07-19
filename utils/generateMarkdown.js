// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // Map license string to badge image or URL
    const licenseBadges = {
      'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      // Add more license badges as needed
    };
  
    // Return badge associated with the license, or empty string if license is not found
    return license in licenseBadges ? licenseBadges[license] : '';
  }
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    // Map license string to license URL
    const licenseLinks = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      // Add more license links as needed
    };
  
    // Return license URL associated with the license, or empty string if license is not found
    return license in licenseLinks ? licenseLinks[license] : '';
  }
  

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    // Call renderLicenseBadge() and renderLicenseLink() functions to generate badge and link
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
  
    // Return formatted license section with badge and link
    return badge !== '' && link !== ''
      ? `## License\n\n${badge}\n\nThis project is licensed under the [${license}](${link}) license.`
      : '';
  }
  

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    // Call renderLicenseSection() function to generate license section
    const licenseSection = renderLicenseSection(data.license);
  
    // Return formatted markdown for README
    return `# ${data.title}
  
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Tests](#tests)
  ${licenseSection}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributors
  ${data.contributors}

  Tests
  ${data.tests}
  
  ${licenseSection}
  `;
  }
  
  module.exports = generateMarkdown;
  