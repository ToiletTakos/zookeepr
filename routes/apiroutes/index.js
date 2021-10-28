const router = require('express').Router();
const animalRoutes = require('../apiroutes/animalRoutes');

router.use(require('./zookeeperRoutes'));
//allows us to use this file as a hub for all routing functions we may want to add to the app.
router.use(animalRoutes);

module.exports = router;