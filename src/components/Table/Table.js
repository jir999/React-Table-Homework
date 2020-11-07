import React from "react";
import Header from "../Header";
// import Column from "../Column";
import Row from "../Row";
import Footer from "../Footer";

const Table = () => {
  return (
    <div>
      <table>
        <Header />
        {/* <Column /> */}
        <Row />
        <Footer />
      </table>
    </div>
  );
};

export default Table;
