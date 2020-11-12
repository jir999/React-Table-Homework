import React, { Profiler } from "react";
import Table from "./components/Table";
import ErrorBoundry from "./components/Error/ErrorBoundry";
import ThrowError from "./components/Error/ThrowError";

import "./styles.css";

export default function App() {
  const onRender = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime, interactions });
  }

  return (
    <Profiler id="App" onRender={onRender}>
      <ErrorBoundry fallback={<div>Oops something went wrong!</div>}>
        <div className="App">
          <Table />
        </div>
      </ErrorBoundry>
    </Profiler>
  );
}
