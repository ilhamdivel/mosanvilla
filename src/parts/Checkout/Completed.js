import React from "react";
import Fade from "react-reveal/Fade";

import IllCompleted from "assets/images/illustration/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={IllCompleted}
              alt="completed checkout "
              className="img-fluid"
            />
            <p className="text-gray-500">
              Nanti akan kami informasikan melalui email setelah transaksi diterima
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
