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


const deleteOne = (id) => {
  return new Promise((resolve, reject) => {
    Models.destroy({
      where: { id: id },
    })
      .then((removed) => {
        resolve(removed);
      })
      .catch((err) => reject(err));
  });   
};

const getAllCategory = (categoria) => {
  return new Promise((resolve, reject) => {
    Models.findAll({
      where: { category: categoria },
    })
      .then((models) => {
        resolve(models);
      })
      .catch((err) => reject(err));
  });
};


module.exports = {
  createOne,
  getAll,
  getOne,
  deleteOne,
  getAllCategory
};