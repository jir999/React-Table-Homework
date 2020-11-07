import React, { useState, useEffect } from "react";

const Row = () => {
  const [rowData, setRowData] = useState(null);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((arr) => {
        const data = arr.map((item) => ({
          name: item.name,
          surName: item.surName,
          age: item.age,
          pincode: item.pincode
        }));
        console.log(data);
        setRowData(data);
      });
  }, []);

  useEffect(() => {
    console.log(rowData);
  });

  return rowData.map((item) => (
    <tbody>
      <tr>
        <td>item.name</td>
        <td>item.surName</td>
        <td>item.age</td>
        <td>item.pincode</td>
      </tr>
    </tbody>
  ));
};

export default Row;
