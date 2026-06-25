import React from "react";

function Account() {
  return (
    <div style={{ backgroundColor: "rgb(250, 250, 250)" }} className="mt-5">
    <div className="container  mb-5 mt-5 " style={{backgroundColor: "rgb(250, 250, 250)",paddingTop:"25px"}} >
         <h2 className="  fs-4 mb-5 mt-3 text-center">Steps to open a demat account with Zerodha</h2>
      <div className="row pb-5 " style={{margin:"0 12%"}}>
        {/* Left Side Image */}
        <div className="col-6 text-center ">
          <img
            src="./assets/account.svg"
            alt="Signup"
           
          />
        </div>

        {/* Right Side Form */}
     <div className="col-6 mt-5">

  <div className="d-flex align-items-center  border-bottom mb-4 ">
    <div className="step-circle me-3 mb-3">01</div>
    <h2 className="fs-5 mb-3" >Enter the requested details</h2>
  </div>

  <div className="d-flex align-items-center border-bottom mb-4">
    <div className="step-circle me-3 mb-3">02</div>
    <h2 className="fs-5 mb-3">Complete e-sign & verification</h2>
  </div>

  <div className="d-flex align-items-center mb-5">
    <div className="step-circle me-3">03</div>
    <h2 className="fs-5 mb-0">Start investing!</h2>
  </div>

</div>
        </div>
      </div>
      </div>
    
  );
}

export default Account;
