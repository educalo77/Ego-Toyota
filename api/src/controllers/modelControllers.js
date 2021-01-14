const { Models } = require("../db");

const getAll = () => {
  return new Promise((resolve, reject) => {
    Models.findAll()
      .then((models) => {
        resolve(models);
      })
      .catch((err) => reject(err));
  });
};

const createOne = (img, model, year, price, fullmodel, description, slogan, category) => {
  return new Promise((resolve, reject) => {   
    Models.create({ img, model, year, price, fullmodel, description, slogan, category })
      .then((model) =>{
        resolve(model)
      })
      .catch((err) =>{       
        reject(err)
      } );
  });
};

const getOne = (id) => {
  return new Promise((resolve, reject) => {
    Models.findOne({
      where: { id },
    })
      .then((model) => {
        resolve(model);
      })
      .catch((err) => reject(err));
  });
};


module.exports = {
  createOne,
  getAll,
  getOne
};