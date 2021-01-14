module.exports = (sequelize, DataTypes) => {
  const CarDetails = sequelize.define("cardetails", {
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.STRING,
    },
  });
  return CarDetails;
};