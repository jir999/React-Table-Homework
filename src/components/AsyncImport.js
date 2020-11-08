import React, { Suspense } from 'react';
import Loader from './Loader';

const AsyncImport = (Component) => {
  return (props) => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default AsyncImport;
