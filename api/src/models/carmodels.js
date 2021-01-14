
module.exports = (sequelize, DataTypes) => {
  const CarModels = sequelize.define("carmodels", {
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.REAL,
    },
    img: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    slogan: {
      type: DataTypes.TEXT,
    },
      fullmodel: {
        type: DataTypes.STRING,
    }
  });
  return CarModels;
};
