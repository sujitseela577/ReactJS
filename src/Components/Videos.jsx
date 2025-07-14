import React from "react";
function Videos() {
  let videosList = ["v1", "v2", "v3"];
  return (
    <>
      {videosList.map((v, i) => {
        return <li key={i}> {v}</li>;
      })}
    </>
  );
}

export default Videos;
