import React from "react";

function About(props) {
  let ifBio = () => {
    if(!props.bio || props.bio === "") {
      return null
    } else {
      return <p>{props.bio}</p>
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {ifBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
