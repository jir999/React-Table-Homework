import React from "react";

const Header = ({ headerData }) => {


  return (
    <thead>
      <tr>
        {headerData.map((item) => <th>{item}</th>)}
      </tr>
    </thead>
  );
};

export default Header;
