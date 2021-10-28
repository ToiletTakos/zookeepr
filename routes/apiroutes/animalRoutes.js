// since we cant use app anylonger we must use router instead to route
const router = require("express").Router();
const { filterByQuery, findById, createNewAnimal, validateAnimal, } = require("../../lib/animals");
const { animals } = require("../../data/animals");
//router in place of app
router.get("/animals", (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

router.get("/animals/:id", (req, res) => {
    const result = findById(req.params.id, animals);
    if (result) {
      res.json(result);
    } else {
      res.send(404);
    }
  });
  
router.post("/animals", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = animals.length.toString();

    //if any data in req.body is incorrect, send a 400 error back
    if (!validateAnimal(req.body)) {
        // send a http status code and a message explaining what went wrong
        res.status(400).send("The animal is not properly formatted.");
    }
    else {
        // add animal to json file and animals array in this function
        const animal = createNewAnimal(req.body, animals);
        res.json(animal);
    }
});
//export the router to allow the information to be taken
module.exports = router;