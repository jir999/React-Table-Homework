import React from "react";

const Header = ({ headerData }) => {


  return (
    <thead>
      <tr>
        <th>{headerData[0]}</th>
        <th>{headerData[1]}</th>
        <th>{headerData[2]}</th>
        <th>{headerData[3]}</th>
      </tr>
    </thead>
  );
};

export default Header;
