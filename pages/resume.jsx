import React from "react";
import useWindowSize from "../hooks/WindowSize";

const ExamplePDFViewer = () => {
  const size = useWindowSize();
  return (
    <iframe
      style={{
        width: size.width,
        height: size.height-90,
        position: "absolute",
        bottom: 0
      }}
      src="/README.pdf"
    />
  );
};

export default ExamplePDFViewer;
