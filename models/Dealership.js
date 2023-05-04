const { Model, Datatypes } = require("sequelize");
const sequelize = require("sequilize");

class Dealership extends Model {}

Dealership.init(
  {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    location_id: {
      type: Datatypes.INTEGER,
    },
    note: {
      type: Datatypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

module.exports = router;
