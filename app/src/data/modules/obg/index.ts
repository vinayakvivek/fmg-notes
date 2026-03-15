import type { Module } from "../../types";
import ch01 from "./ch01";

const obg: Module = {
  id: "obg",
  name: "Obstetrics & Gynaecology",
  shortName: "OBG",
  color: "orange",
  icon: "Baby",
  chapters: [ch01],
};

export default obg;
