import React from "react";
import Tran from "./tran"


const Nav = () => {
  let anchors = [
    {
      anchor: "Services",
    },
    {
      anchor: "Projects",
    },
    {
      anchor: "About",
    },
  ];

  return (
    <div id="main">
      <div id="logo">LOGOBAKERY</div>
      <div id="link">
          {anchors.map((data)=>(
              <Tran {...data} />
          ))}
      </div>
      <div id="button">
        <button >Contact</button>
      </div>
    </div>
  );
};

export default Nav;
