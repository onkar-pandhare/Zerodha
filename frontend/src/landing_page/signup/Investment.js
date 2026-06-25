import React from "react";
function Investment() {
  return (
    <div className="container mb-5" style={{ marginTop: "100px" }}>
      <h1 className="fs-3 text-center mb-5" >
        Investment options with Zerodha demat account
      </h1>

      <div className="row   mt-5" style={{marginTop:"5000px"}}>
        <div className="col-md-6" style={{ paddingLeft: "12%" }}>
          <div className="d-flex align-items-start">
            <img src="./assets/stock.svg" className="me-4" />
            <div>
              <h3 className="fs-4">Stocks</h3>
              <p className=" text-muted">
                Invest in all exchange-listed<br /> securities
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6"  style={{ paddingRight: "10%" }}>
          <div className="d-flex align-items-start">
            <img src="./assets/mutual funds.svg" className="me-4" />
            <div >
              <h3 className="fs-4">Mutual funds</h3>
              <p className="text-muted">
                Invest in commission-free direct<br /> mutual funds
              </p>
            </div>
          </div>
        </div>
 <div className="row   mt-5">
        <div className="col-md-6"  style={{ paddingLeft: "12%" }}>
          <div className="d-flex align-items-start">
            <img src="./assets/ipo.svg" className="me-4" />
            <div>
              <h3 className="fs-4">IPO</h3>
              <p className=" text-muted">
                Apply to the latest IPOs instantly<br /> via UPI
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6"  style={{ paddingRight: "10%" }}>
          <div className="d-flex align-items-start">
            <img src="./assets/futures.svg" className="me-4" />
            <div>
              <h3 className="fs-4">Futures & options</h3>
              <p className=" text-muted">
                Hedge and mitigate market risk<br /> through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-center mb-5"> <button className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{width:"20%",margin:"0 auto",backgroundColor:"rgb(56, 126, 209)"}}>Explore Investments</button>
   </div>
     </div>
  );
}

export default Investment;
