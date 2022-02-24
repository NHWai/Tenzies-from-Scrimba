import React from "react";

function Dice(props) {
  const style = {
    backgroundColor: "#59E391",
  };
  return (
    // With DiceFace
    <>
      {props.value === 1 && (
        <div
          onClick={props.held}
          style={props.isHeld ? style : null}
          className="box c1"
        >
          <div className="dots"></div>
        </div>
      )}

      {props.value === 2 && (
        <div
          onClick={props.held}
          style={props.isHeld ? style : null}
          className="box c2"
        >
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
      )}

      {props.value === 3 && (
        <div
          onClick={props.held}
          style={props.isHeld ? style : null}
          className="box c3"
        >
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
      )}

      {props.value === 4 && (
        <div
          onClick={props.held}
          style={props.isHeld ? style : null}
          className="box c4"
        >
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
        </div>
      )}

      {props.value === 5 && (
        <div
          onClick={props.held}
          style={props.isHeld ? style : null}
          className="box c5"
        >
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots abs"></div>
        </div>
      )}

      {props.value === 6 && (
        <div
          onClick={props.held}
          style={props.isHeld ? style : null}
          className="box c6"
        >
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots"></div>
          <div className="dots "></div>
          <div className="dots "></div>
        </div>
      )}
    </>

    // With numbers
    // <div
    //   onClick={props.held}
    //   style={props.isHeld ? style : null}
    //   className="box"
    // >
    //   <h2>{props.value}</h2>
    // </div>
  );
}

export default Dice;
