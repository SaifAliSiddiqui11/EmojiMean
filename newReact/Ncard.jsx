import React from "react";
import Cards from "./Data";

export default function nCard() {
  return (
    <Cards
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.link}
    />
  );
}
