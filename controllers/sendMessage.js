

const sendMessage =(req, res, next) =>{
 
    const fs = require("fs");
    const fileName = `./contactForm/${req.body.name}${req.body.surName}${Date.now()}.txt`
    const message = 
    `nom: ${req.body.name}  
    prenom: ${req.body.surName} 
    mail: ${req.body.mail}
    message: ${req.body.message}  `
    fs.writeFile(fileName, message, function (err) {
      if (err) throw err;
      console.log('It\'s saved!');
    });
    
    res.status(200);
    res.send('ok');
  }

  module.exports = sendMessage;