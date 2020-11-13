import React, { useState, useEffect } from 'react';
import Header from '../Header';
// import Column from "../Column";
import Row from '../Row';
import Footer from '../Footer';
import ThrowError from "../Error/ThrowError";

const Table = () => {
  const [data, setData] = useState([]);
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
    if (data[0]) {
      setHeaderData(Object.keys(data[0]))   // [name, surName, ...]
    }
  }, [data])

  return (
    <div>
      <table>
        <Header headerData={headerData} />
        {data.map((item, index) => {
          if (index === 1) {
            return <ThrowError time={5000} errorMessage="second line Error" />
          }
          return <Row index={index} item={item} />
        })
        }
        <Footer render={(count) => (<th>{count}</th>)} count={data.length} />
      </table>
    </div>
  );
};

export default Table;
