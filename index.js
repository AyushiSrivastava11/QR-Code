import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
inquirer
  .prompt([
    {
        "message": "Type your URL here" , 
        "name" : "URL"
    }
  ])
  .then((answers) => {
  //  console.log(answers); //check if its going okay or not
    const url = answers.URL;
    //for image
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    //Saving txt file
    
    fs.writeFile("URL.txt",url,(err)=>
    {
        if(err) throw err;
        console.log("The File has been saved.");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



  //1.Use the inquirer npm package to get user input.
  //2.Use the qr-image npm package to turn user url into Qr code image.
  //3.Create a txt file to save the user input using the native fs node module.