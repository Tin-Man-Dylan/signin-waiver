var express = require('express');
var router = express.Router();

const {google} = require('googleapis');
const fs = require('fs');
const key = require('./signin-waiver.json');

const drive = google.drive('v3');
const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/drive'],
  null
);

jwtClient.authorize((authErr) => {
  if (authErr) {
    console.log(authErr);
    return;
  }
});

const fileMetadata = {
     mimeType: 'text/plain',
  name: 'test.txt', // The file can just be named req.body.pdf_name
  parents: ['1sSm2ChzrMUgWFPJ_0RLJy-UQeEGvW0cD'] //Need to have the square brackets around the URL(alphanumeric string at end) for the google drive folder
};

  const media = {
    mimeType: 'text/plain',
    body: fs.createReadStream('../../Downloads/test.txt') //Path to file wanting to be uploaded (can't seem to access my files on ChromeOS from my Crouton Linux), should be 'path to downloaded pdf' + req.body.pdf_name + '.pdf'
  };

 


/* GET users listing. */
router.post('/', function(req, res, next) {

          console.log(req.body.pdf_name);
          res.sendStatus(200);
     drive.files.create({
    auth: jwtClient,
    resource: fileMetadata,
    media,
    fields: 'id'
  }, (err, file) => {
    if (err) {
      console.log(err);
      return;
    }
    // Log the id of the new file on Drive
    console.log('Uploaded File Id: ', file.id);
  });



});

module.exports = router;