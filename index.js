import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        message: "Enter Url",
        name: "url",
    }
  ])
  .then((answers) => {
    const url = answers.url;
    console.log(url);
    //var qr = require('qr-image');
 
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qrimage.png'));
 
    //var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });