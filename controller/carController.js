let express = require('express')
let router = express.Router();

const carService = require('../service/carService');


router.post("/cars", (req, res) => {
    let newcar = carService.addcar(req.body);
    res.status(200).send(newcar);
  });
  

router.get("/cars/:id", (req, res) => {
  const carsList = readJSONFile();
  
});

router.get("/cars", (req, res) => {    
  const carsList = carService.getAllcars();
  if (carsList!==undefined && carsList.length!==0) {
      res.status(200).send(carsList);
  } else {
      res.status(204).send('No car found!');
  }
});


router.put("/cars/:id", (req, res) => {
  let foundcar = carService.updatecar(req.params.id, req.body.name, req.body.img);
  if (foundcar!==null) res.status(200).send(foundcar);
  else res.status(204).send('No car found');
});
  

router.delete("/cars/:id", (req, res) => {
    let foundcar = carService.removecar(req.params.id);
    if (foundcar!==null) res.status(200).send(foundcar);
    else res.status(204).send('No car found');
});
  

module.exports = router;