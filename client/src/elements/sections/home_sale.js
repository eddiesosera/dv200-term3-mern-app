import React from "react";
import { Card } from "../components/card";

import img1 from "../../img/hero/1.png";
import img2 from "../../img/hero/2.png";
import img3 from "../../img/hero/3.png";
import img4 from "../../img/hero/4.png";

export const Sale = () => {
  const sale_content = [
    {
      id: "64cda741ada6611bf071e13a",
      imgsrc: img1,
      buttonTitle: "Buy Now",
      heading: "State of the Art Grand Piano"
    },
    {
      id: "64cda741ada6611bf071e13a",
      imgsrc: img2,
      buttonTitle: "Buy Now",
      heading: "Guitar "
    },
    {
      id: "64cda741ada6611bf071e13a",
      imgsrc: img3,
      buttonTitle: "View Microphones",
      heading: "Guitar "
    },
    {
      id: "64cda741ada6611bf071e13a",
      imgsrc: img4,
      buttonTitle: "Buy Now",
      heading: "Guitar "
    }
  ];

  return (
    <ul style={{ display: "flex" }}>
      {sale_content.map(sale => {
        return <li key={sale.imgsrc}><Card product={sale} img={sale.imgsrc} title={sale.heading} /></li>;
      })}
    </ul>
  );
};
