import React, { useState, useEffect } from "react";
import "./index.css";

const MouseTracking = () => {
  const [mousePoints, setMousePoints] = useState({
    X: 0,
    Y: 0,
  });
  const [isMouseEnable, setMouseEnable] = useState(false);

  useEffect(() => {
    function handleMouse(event) {
      setMousePoints({
        X: event.clientX, //updating the X-axiss
        Y: event.clientY, // updating the Y-axiss
      });
    }
    isMouseEnable && window.addEventListener("mouseover", handleMouse); // if mouse tracker is enable (true) then it render
    return () => window.removeEventListener("mouseover", handleMouse);
  });

  return (
    <div className="mouse-handel">
      <button
        className="button-style"
        onClick={() => setMouseEnable(!isMouseEnable)} //toggle the mouse tracking
      >
        Mouse Tracking: {isMouseEnable ? "True" : "False"}
      </button>
      <p style={{ fontSize: "20px", marginTop: "30px" }}>
        {mousePoints.X}/{mousePoints.Y}
      </p>
    </div>
  );
};

export default MouseTracking;
