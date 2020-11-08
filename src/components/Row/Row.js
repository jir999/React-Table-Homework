import React from "react";

const Row = ({ rowData }) => {
  console.log(rowData)
  return (
    <tbody>
      {rowData.map((item) => (
        <tr>
          <td>{item.name}</td>
          <td>{item.surName}</td>
          <td>{item.age}</td>
          <td>{item.pincode}</td>
        </tr>
      ))}
    </tbody>
  )
};

export default Row;
