const router = require("express").Router();

const {
  createOne,
  getAll
} = require("../controllers/detailControllers");

router
  .route("/")
  .post((req, res) => { 
    const { img, description, carId, detail } = req.body;
    createOne(img, description, carId, detail)
      .then((detail) => res.json(detail).status(201))
      .catch((err) => res.status(400).json(err));
  })
//   .get((req, res) => {
//     getAll()
//       .then((models) => res.json(models).status(200))
//       .catch((err) => res.status(404).json(err))

//   })

  router
    .route("/:id")
    .get((req, res) => {
    const { id } = req.params;
    getAll(id)
      .then((detail) => res.json(detail).status(200))
      .catch((err) => res.status(404).json(err))
 
  })

  module.exports = router;