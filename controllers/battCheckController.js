import DetailsSites from "../models/detailsSites.js";
import Realtime from "../models/Realtime.js";
import { Sequelize } from "sequelize";
import moment from "moment";
import db from "../config/database.js";

const op = Sequelize.Op;

export const getDetailsSites = async (req, res) => {
  try {
    const response = await DetailsSites.findAll();
    res.send(response);
    // res.status(200).json({ msg: "sucess", data: response });
  } catch (err) {
    console.log(err);
  }
};

export const getBattLost = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM `realtime`", {
      type: db.QueryTypes.SELECT,
    });
    const arr = await data;
    const total_data = arr.length;
    const array_response = [];

    // const nama_site = data[0].site_name;

    // console.log("nama site : " + nama_site);
    console.log("jumlah_data  : " + total_data);

    for (let i = 0; i < total_data; i++) {
      const site_name = await arr[i].site_name;

      const table_name = site_name + "_pms";
      console.log("table name : " + table_name);

      //   const response = await db.query(`SELECT * FROM ${table_name}`, {
      //     type: db.QueryTypes.SELECT,
      //   });

      const response = await db.query(
        `SELECT DISTINCT dock FROM ${table_name} WHERE state_dmos != 'ON' OR state_cmos != 'ON';`,
        {
          type: db.QueryTypes.SELECT,
        }
      );

      const arr_dock = await response;
      const total_dock = arr_dock.length;

      console.log("total dock : " + total_dock);
      console.log("nama site : " + site_name);
      console.log("response : " + response);
      const dock_response = [
        {
          site_name: site_name,
          dock_lost: total_dock,
          site: 1,
          dock_data: arr_dock,
        },
      ];
      if (Object.keys(arr_dock).length) {
        console.log("data found");
        array_response.push(dock_response);
      }

      const total_loop = total_data - 1;
      console.log("jumlah total_loop : " + total_loop);
      console.log("jumlah total i : " + i);
      if (i === total_loop) {
        console.log("dock_response : " + array_response);
        res.send(array_response);
      }

      console.log("belum kirim : ");
    }

    // res.send(response);
    // res.status(200).json({ msg: "sucess", data: response });
  } catch (err) {
    console.log(err);
  }
};
