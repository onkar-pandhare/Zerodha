import React from "react";
function Benefits() {
  return (
    <div className="container mt-5  ">
      <div className="row" style={{ marginTop: "10%" }}>
        <div className="col-6 text-center mt-5 "style={{ paddingTop: "7%" }} >
          <img
            src="./assets/benefits.svg"
            style={{ width: "60%", height: "auto" }}
          />
          <h1 className=" fs-4">Benefits of opening a Zerodha demat account</h1>
        </div>
        <div className="col-6">
            <div className="mb-5">
          <h2 className="fs-5 mb-4">Unbeatable pricing</h2>
          <p className="text-muted">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for<br />
            intraday and F&O trades
          </p>
          </div>

            <div className="mb-5">
                <h2 className="fs-5 mb-4"> Best investing experience</h2>
          <p className="text-muted">
            Simple and intuitive trading platform with an easy-to-understand
            user<br /> interface.
          </p>
            </div>
             <div className="mb-5">  <h2 className="fs-5 mb-4">No spam or gimmicks</h2>
          <p className="text-muted">
            Committed to transparency — no gimmicks, spam, "gamification", or<br />
            intrusive push notifications.
          </p></div>

          
  <div className="mb-5">  
          <h2 className="fs-5 mb-4">The Zerodha universe</h2>
          <p className="text-muted">
            More than just an app — gain free access to the entire ecosystem of<br />
            our partner products.
          </p></div>
        

        </div>
      </div>
    </div>
  );
}

export default Benefits;
