import React from "react";
import ReactPlayer from "react-player";
import "./RegularLesson.css";

export default function RegularLesson() {
  return (
    <>
      <h1>Regular Lessons</h1>
      <div>
        <h4>Learn Letter A</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=tFQKwKWroMA"
          width="400px"
        />
        <h4>Learn Letter B</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=Hp8sCfNEvvk"
          width="400px"
        />
        <h4>Learn Letter C</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=_mx_82MkcHM"
          width="400px"
        />
        <h4>Learn Letter D</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ji6nvHP1iog"
          width="400px"
        />
        <h4>Learn how to count to 100</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=kw2JC9E3-JU"
          width="400px"
        />
        <h4>Learn how to add from 1 to 10</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=YrZHNBSkhWY"
          width="400px"
        />
        <h4>Learn how to add with random numbers</h4>
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=wmGuVDqxWj8"
          width="400px"
        />
      </div>
    </>
  );
}
