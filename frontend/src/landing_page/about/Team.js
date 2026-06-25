import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5  border-top">
        <h1 className="text-center  ">People</h1>
      </div>

      <div
        className="row p-3   text-muted "
        style={{ fontSize: "1.2em", lineHeight: "1.8" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="./assets/onkar1.png"
            alt="Team Member"
            className="mb-4"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4>Onkar Pandhare</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p className="mt-3">
            Onkar Pandhare is an aspiring Software Development Engineer and
            final-year Information Technology student at Vidya Pratishthan’s
            Kamalnayan Bajaj Institute of Engineering and Technology, Baramati.
          </p>

          <p>
            Passionate about web development and software engineering, he built
            this Zerodha-inspired platform to strengthen his skills in React,
            JavaScript, Bootstrap, and modern frontend development practices.
          </p>

          <p>
            Beyond coding, he enjoys learning new technologies, solving
            programming challenges, and working on innovative projects in
            machine learning and web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
