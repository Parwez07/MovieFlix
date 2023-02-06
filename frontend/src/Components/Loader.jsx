import Spinner from "react-bootstrap/Spinner";
import React from "react";

const Loader = () => {
  return (
    <div className="movies">
      <div style={{ height: "78vh" }} className="flex justify-content-center">
        <Spinner
          style={{ transform: "scale(10)" }}
          animation="grow"
          variant="info"
        />
      </div>
    </div>
  );
};

export default Loader;
