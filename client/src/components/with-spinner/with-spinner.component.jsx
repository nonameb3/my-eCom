import React from "react";

import Spiner from "../spiner/spiner.component";

// hight order component
export default WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spiner /> : <WrappedComponent {...otherProps} />;
};
