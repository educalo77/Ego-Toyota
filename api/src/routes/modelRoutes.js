const router = require("express").Router();

const {
  createOne,
  getAll,
  getOne
  
} = require("../controllers/modelControllers");

router
  .route("/")
  .post((req, res) => { 
    const { img, model, year, price, fullmodel, description, slogan, category} = req.body;
    createOne(img, model, year, price, fullmodel, description, slogan, category)
      .then((model) => res.json(model).status(201))
      .catch((err) => res.status(400).json(err));
  })
  .get((req, res) => {
    getAll()
      .then((models) => res.json(models).status(200))
      .catch((err) => res.status(404).json(err))

  })

  router
    .route("/:id")
    .get((req, res) => {
    const { id } = req.params;
    getOne(id)
      .then((model) => res.json(model).status(200))
      .catch((err) => res.status(404).json(err))
 
  })

  module.exports = router;