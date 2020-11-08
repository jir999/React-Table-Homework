import React from 'react';

const Row = ({ rowData }) => (
  <tbody>
    {rowData.map((item, index) => (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.surName}</td>
        <td>{item.age}</td>
        <td>{item.pincode}</td>
      </tr>
    ))}
  </tbody>
);

export default Row;
