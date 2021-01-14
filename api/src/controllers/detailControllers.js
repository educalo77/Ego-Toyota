const { Details } = require("../db");


const createOne = (img, description, carId, detail) => {
  return new Promise((resolve, reject) => {   
    Details.create({ img, description, carId, detail })
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
    Details.findAll({
      where: { carId },
    })
      .then((models) => {
        resolve(models);
      })
      .catch((err) => reject(err));
  });
};


module.exports = {
  createOne,
  getAll

};