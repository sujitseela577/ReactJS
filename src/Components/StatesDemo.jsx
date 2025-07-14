import React from "react";
import { useState, useEffect } from "react";

function StatesDemo() {
  const [videoName, setVedioName] = useState("NODE JS");
  const [videoLikes, setVedioLikes] = useState(0);

  useEffect(() => {
    console.log("component rendering ...");
  }, []);

  useEffect(() => {
    console.log("vedio likes  updated");
  }, [videoLikes]);

  return (
    <div>
      <h6>video Name = {videoName}</h6>
      <h6>Likes = {videoLikes} </h6>
      <button onClick={() => setVedioLikes(videoLikes + 1)}>Like video</button>
      <button onClick={() => setVedioLikes(videoLikes - 1)}>
        DisLike video
      </button>
      {videoLikes >= 10 && <p>yayy reached 10 likes</p>}
    </div>
  );
}
export default StatesDemo;
