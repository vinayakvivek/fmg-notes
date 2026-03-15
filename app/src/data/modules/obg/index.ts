import type { Module } from "../../types";
import ch01 from "./ch01";
import ch02 from "./ch02";
import ch03 from "./ch03";
import ch04 from "./ch04";
import ch05 from "./ch05";

const obg: Module = {
  id: "obg",
  name: "Obstetrics & Gynaecology",
  shortName: "OBG",
  color: "orange",
  icon: "Baby",
  chapters: [ch01, ch02, ch03, ch04, ch05],
};

export default obg;
