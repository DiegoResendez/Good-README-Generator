function generateMarkdown(data) 
{
  return `${generateTitle(data.title)}
  ${generateDescription(data.description)}
  ${generateTOC(data.tableOfContents)}
  ${generateInstallation(data.installation)}
  ${generateUsage(data.usage)}
  ${generateLicense(data.license)}
  ${generateContributing(data.contributing)}
  ${generateTests(data.tests)}
  ${generateQuestions(data.questionsEmail, data.questionsPic)}
`;
}

function generateTitle(title) 
{
  return `# ${title}
`;
}

function generateDescription(description) 
{
  return `## Description
${description}
`;
}

function generateTOC(tableOfContents) 
{
  let toc = '## Table Of Contents\n';
  let contents = tableOfContents.split(',');

  contents.forEach(element => {

    toc += `* [${element.charAt(0).toUpperCase() + element.slice(1)}](#${element})
`;
  });
  return toc;
}

function generateInstallation(installation) 
{
  return `## Installation
${installation}
`;
}

function generateUsage(usage) 
{
  return `## Usage
${usage}
`;
}

function generateLicense(license) 
{
  let lic = '## License\n';

  license.forEach(element => 
    {
    if(element === 'MIT') 
    {
      lic += `
* [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
`;
    }
    else if (element === 'GPLv3') 
    {
      lic += `
* [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
`;
    }
    else if (element === 'AGPL') 
    {
      lic += `
* [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)
`;
    }
  });

  return lic;
}

function generateContributing(contributing) 
{
  let contributors = contributing.split(',');
  let cont = "## Contributing\n";

  contributors.forEach(element => {
    cont += `
* [${element}](http://github.com/${element})
`;
  });

  return cont;
}

function generateTests(tests) 
{
  let testArr = tests.split(',');
  let test = "## Test\n";

  testArr.forEach(element => {
    test += `
* ${element}
`;
  });

  return test;
}

function generateQuestions(questionsEmail, questionsPic) {
  let questions = "## Questions";

  questions += `
![Image of Tony](${questionsPic})
* Email: ${questionsEmail}
`
  return questions;
}
module.exports = generateMarkdown;
