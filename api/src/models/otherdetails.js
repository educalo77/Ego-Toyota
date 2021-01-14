module.exports = (sequelize, DataTypes) => {
  const OtherDetails = sequelize.define("otherdetails", {
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
  return OtherDetails;
};