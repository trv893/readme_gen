// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    licenseShort = "";
    switch(license[0]) {
      case "G":
        return `![GitHub license](https://img.shields.io/badge/license-GNUGPLv3-blue.svg)`
      case "M":
        return `![GitHub license](https://img.shields.io/badge/license-MITL-blue.svg)`
      case "A":
        return `![GitHub license](https://img.shields.io/badge/license-ApacheV2-blue.svg)`
    }
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}

function usageScreenshots (usageScreenshotPath){
  if (usageScreenshotPath !== 'No') {
    var split = usageScreenshotPath.split(",")
    returnedVal = [];
    split.forEach(element => {
      returnedVal.push(`![Example](../${element})`)
    });
    return returnedVal.join(`\n`);
     
  }
  return '';
}

function renderFeatures (features){
  if (features !== null){
    var split = features.split(",");
    renderList = []
    split.forEach(val => renderList.push(`-${val}`+`\n`));
    return renderList.join("")
  }
  return "";
}

function renderInstallation (features){
  if (features !== ""){
    return `## Installation
    To install necessary dependencies, run the following command:
    \`\`\`
    ${features}
    \`\`\``;
  }
  return ''
 }


function renderIndex (returnedData){
  tableOfConent ="";
  if(returnedData.installation != ""){
    tableOfConent += `* [Installation](#installation) \n`
  }
  if(returnedData.usage != ""){
    tableOfConent += `* [Usage](#usage) \n`
  }
  if(returnedData.features != ""){
    tableOfConent += `* [Features](#features) \n`
  }
  if(returnedData.license != "none"){
    tableOfConent += `* [License](#license) \n`
  }
  if(returnedData.credits != ""){
    tableOfConent += `* [Credits](#credits) \n`
  }
  
  return tableOfConent
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} \n
${renderLicenseBadge(data.license)}\n
## Description\n
${data.description}\n
## Table of Contents\n
${renderIndex(data)}\n
## Installation
To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`\n
## Usage\n
${data.usage}\n
${usageScreenshots(data.usageScreenshotPath)}\n
## Features\n
${renderFeatures(data.features)}\n
${renderLicenseSection(data.license)}\n
## Credits\n
${data.credits}\n
## Questions\n
If you have any questions about the repo, open an issue or contact me directly at ${data.email}
`;
  }
  
  module.exports = generateMarkdown;
