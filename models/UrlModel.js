const { DataTypes } = require("sequelize");
const connection = require("../db");

const UrlModel = connection.define(
  "urls_list",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    orginalUrl: {
      type: DataTypes.STRING,
      field: "original_url",
    },
    key: {
      type: DataTypes.SMALLINT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = UrlModel;
