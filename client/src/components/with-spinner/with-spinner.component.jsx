import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

// hight order component
export default WrappedComponent => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};
