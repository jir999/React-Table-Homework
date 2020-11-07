import React, { Suspense } from "react";
import Loader from "./Loader";

const AsyncImport = (Component) => {
  return () => (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export default AsyncImport;
