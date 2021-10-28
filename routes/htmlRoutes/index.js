const path = require('path');
const router = require('express').Router();

// the / represents the root route of the server. This route creates a homepage for the server
// this get request only has one job to do and thats to respond with the html page to display in the browser
router.get('/', (req, res) => {
    // this send the file to display
    //then we tell it where to find the html file we want to send back to the client
    // we use the path module to ensure w find the correct location for the HTML code we want to display
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// allows us to navigate to the animal directory tab in the browser on the index.html page
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
  });

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
  });

//the * acts as a wildcard meaning any route that wasn't previously defined will fall under this request
//and receive the homepage as the response
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

module.exports = router;