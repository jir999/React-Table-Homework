import React from "react";

const Header = ({ headerData }) => {
  console.log(headerData)

  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>SurName</th>
        <th>Age</th>
        <th>PinCode</th>
      </tr>
    </thead>
  );
};

export default Header;
