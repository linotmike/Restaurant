const Dealership = require("./Dealership");
const Car = require("./Car");
const { DELETE } = require("sequelize/types/query-types");

Dealership.belongsTo(Car, {
  onDELETE: "CASCADE",
});
Car.hasMany(Dealership);

module.exports = {
  Dealership: Dealership,
  Car: Car,
};
