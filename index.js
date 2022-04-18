// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select licenses (check all that apply)',
        choices: ['MIT', 'ISC', 'GNUPLv3']
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

//     fs.writeFile('./READMe.MD', generateMarkdown(data), err => {
//         if (err) throw new Error(err) ;
        
//         console.log('Portfolio complete! Check out index.html to see the output!')
        
//     });
// }

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then(answers => fs.writeFile('./test/readme.md', generateMarkdown(answers),err =>{
            if(err){
                console.log(err);
                return
            }else{
                console.log('Readme.MD file made');
            }
        }))

   // promptUser(questions)
        

}

// Function call to initialize app
init();
