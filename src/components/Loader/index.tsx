import React from "react";
import Spinner from "react-bootstrap/Spinner";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div>
      <Spinner animation="grow" />
    </div>
  );
};

export default Loader;
