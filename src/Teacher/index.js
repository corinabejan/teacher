import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Teacher() {
 
  return (
    <>
      <h1>Teacher Page</h1>
      <h2>Name: Corina bejan</h2>
      <h2>Skills: math, chemistry, reading</h2>
      <img/>
      <img/>
      <Link to="/regularlesson">Add a Regular Lesson</Link>
      <br/>
      <Link to="/livesession">Schedule a Live Streaming</Link>
      <br/>
      <Link to="/customlesson">Add a Custom Lesson</Link>
    </>
  );
}
