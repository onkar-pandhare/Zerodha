import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Header Wrapper with extra side margins */}
      <div className="d-flex justify-content-between align-items-center pt-5 pb-4" style={{ margin: "0 190px" }}>
        <h5 className="fw-normal text-white mb-4">Support Portal</h5>
        <a href="#" className="text-white fs-6 text-decoration-underline fw-normal " style={{ marginRight: "130px" }}>Track Tickets</a>
      </div>

      {/* Main Content Wrapper with extra side margins */}
      <div className="row pb-5 " style={{ margin: "0 180px" }}>
        {/* Left Side: Search Area */}
        <div className="col-6 pe-5 mb-3">
          {/* Constrained max-width or custom line break to force it into two lines */}
          <h1 className="fs-3 fw-normal text-white mb-4" style={{ lineHeight: "1.5", maxWidth: "460px" }}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          
          {/* Reduced width for the input box */}
          <input 
            type="text" 
            placeholder="Eg: how do i activate F&O, why is my order getting rejected.." 
            className="form-control border-0 rounded-1 mb-3"
            style={{ 
              padding: "14px 20px",
              fontSize: "1rem",
              width: "100%",
              maxWidth: "480px", 
              color: "#444",
              borderRadius: "10px",
            }} 
          />
          
          {/* Quick Links Group */}
          <div className="d-flex flex-wrap gap-3 mt-2" style={{ fontSize: "0.95rem", lineHeight: "1.8" }}>
            <a href="#" className="text-white text-decoration-underline">Track account opening</a>
            <a href="#" className="text-white text-decoration-underline">Track segment activation</a>
            <a href="#" className="text-white text-decoration-underline">Intraday margins</a>
            <a href="#" className="text-white text-decoration-underline">Kite user manual</a>
          </div>
        </div>

        {/* Right Side: Featured Area */}
        <div className="col-6 ps-5 mb-3" style={{ marginTop: "12px" }}>
          <h2 className="fs-4 fw-normal text-white mb-3">Featured</h2>
          <ol className="text-white ps-3" style={{ fontSize: "1rem", lineHeight: "2.2" }}>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-underline">Current Takeovers and Delisting – January 2024</a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-white text-decoration-underline">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;