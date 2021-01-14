const { Other, Models } = require("../db");


const createOne = (img, description, carId, detail) => {
  return new Promise((resolve, reject) => {   
    Other.create({ img, description, carId, detail })
      .then((detail) =>{
        resolve(detail)
      })
      .catch((err) =>{       
        reject(err)
      } );
  });
};

const getAll = (carId) => {
  return new Promise((resolve, reject) => {
    Other.findAll({
      where: { carId },
    })
      .then((models) => {
        resolve(models);
      })
      .catch((err) => reject(err));
  });
};

const getOne = (carId, id) => {
  return new Promise((resolve, reject) => {
    Other.findAll({
      where: { carId, id },
    })
      .then((other) => {
        resolve(other);
      })
      .catch((err) => reject(err));
    })
}


module.exports = {
  createOne,
  getAll,
  getOne
};