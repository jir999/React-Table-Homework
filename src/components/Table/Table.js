import React, { useState, useEffect } from 'react';
import Header from '../Header';
// import Column from "../Column";
import Row from '../Row';
import Footer from '../Footer';

const Table = () => {
  const [data, setData] = useState([]);
  //const [length, setLength] = useState(0);
  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        setData(arr);
      });
  }, []);

  useEffect(() => {
    console.log("a")
    console.log("headerData", headerData)
    setHeaderData(data[0])
    //setLength(data.length);
  }, [data])

  return (
    <div>
      <table>
        <Header headerData={headerData} />
        <Row rowData={data} test="test" />
        <Footer render={(count) => (<th>{count}</th>)} count={data.length} />
      </table>
    </div>
  );
};

export default Table;
