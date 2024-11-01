import React from "react";
import { Link } from "gatsby";

const AppointmentCenterButton = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Link to="/contact" className="default-btn">
        Schedule an Appointment
      </Link>
    </div>
  );
};

export default AppointmentCenterButton;
