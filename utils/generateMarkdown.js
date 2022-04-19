// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  ['Apache', 'Boost', 'BSD', 'None']
  if (license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'Boost'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
  if (license === 'BSD'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }


}


// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)} 

  ## description
  - ${data.description} 

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)


  ## Installation
  
  - ${data.installation}
  
  ## Usage
  - ${data.usage}
  
  ## Credits 
  - ${data.credits}

  ## License 
  -${data.license}

  ## Contribute
  -${data.contribute}

  ## Tests
  - ${data.test}

  ## Questions
  -If you have any questions please email me <${data.email}>
  -[My Github link](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
