import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const DetailsSites = db.define(
  "detailssites",
  {
    // Define attributes
    site_id_name: {
      type: DataTypes.TEXT,
    },

    name: {
      type: DataTypes.TEXT,
    },

    onair_date: {
      type: DataTypes.TEXT,
    },

    topo_sustain_date: {
      type: DataTypes.TEXT,
    },

    gs_sustain_date: {
      type: DataTypes.TEXT,
    },

    longitude: {
      type: DataTypes.TEXT,
    },

    latitude: {
      type: DataTypes.TEXT,
    },

    provinsi: {
      type: DataTypes.TEXT,
    },

    kabupaten: {
      type: DataTypes.TEXT,
    },

    kecamatan: {
      type: DataTypes.TEXT,
    },

    provider_gs: {
      type: DataTypes.TEXT,
    },

    address: {
      type: DataTypes.TEXT,
    },

    beam_provider: {
      type: DataTypes.TEXT,
    },

    cellular_operator: {
      type: DataTypes.TEXT,
    },

    project_phase: {
      type: DataTypes.TEXT,
    },

    build_year: {
      type: DataTypes.TEXT,
    },

    // created_at: {
    //   type: "TIMESTAMP",
    //   defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    //   allowNull: false,
    // },
  },
  {
    // Freeze Table Name
    freezeTableName: true,
    timestamps: true,
    createdAt: false, // don't add createdAt attribute
    updatedAt: false,
  }
);

// Export model DetailsSites
export default DetailsSites;

// (async () => {
//   await db.sync();
// })();

(async () => {
  await db.sync({ alter: false });
})();
