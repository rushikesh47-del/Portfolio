// MySpline.js
import React from "react";
import Spline from "@splinetool/react-spline";

export default function MySpline({ onLoad }) {
  return (
    <Spline
      scene="https://prod.spline.design/LaGCjMoQhSuj4BOt/scene.splinecode" 
      onLoad={onLoad}
    />
  );
}



//https://prod.spline.design/LaGCjMoQhSuj4BOt/scene.splinecode