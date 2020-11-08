import React, { useState, useEffect } from "react";
import Header from "../Header";
// import Column from "../Column";
import Row from "../Row";
import Footer from "../Footer";

const Table = () => {
  const [data, setData] = useState([]);
  let fakeData;

  useEffect(() => {
    let newArr = [];
    fetch("./data.json")
      .then((res) => {
        //console.log(res)
        return res.json()
      })
      .then((arr) => {
        console.log("result", arr)
        fakeData = arr;
        setData(arr)
      });
  }, []);

  useEffect(() => console.log("fakeData", fakeData))
  useEffect(() => console.log("state", data))

  return (
    <div>
      <table>
        <Header />
        {/* <Column /> */}
        <Row rowData={fakeData} />
        <Footer />
      </table>
    </div>
  );
};

export default Table;
