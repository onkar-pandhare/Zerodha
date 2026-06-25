import React from 'react';

function CreateTicket() {
  return (
    <div className="container ">
      {/* Title Row */}
      <div className="row p-5 mt-3 mb-2 ">
        <h1 className="fs-3 mx-5">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      {/* First Row of Cards */}
      <div className="row px-5 mx-5 mb-4">
        <div className="col-4 mb-5">
          <h4 className="fs-5 mb-3 text-dark">
            <i className="fa fa-plus-circle me-2" aria-hidden="true"></i> Account Opening
          </h4>
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Online Account Opening</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Offline Account Opening</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Company, Partnership and HUF Account Opening</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>NRI Account Opening</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Charges at Zerodha</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Getting Started</a><br />
        </div>

        <div className="col-4 mb-5">
          <h4 className="fs-5 mb-3 text-dark">
            <i className="fa fa-user me-2" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Login Credentials</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Account Modification and Segment Addition</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>DP ID and bank details</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Your Profile</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Transfer and conversion of shares</a><br />
        </div>

        <div className="col-4 mb-5">
          <h4 className="fs-5 mb-3 text-dark">
            <i className="fa fa-bar-chart me-2" aria-hidden="true"></i> Trading and Platforms
          </h4>
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Margin/leverage, Product and Order types</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Kite Web and Mobile</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Trading FAQs</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Corporate Actions</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Sentinel</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Kite API</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Pi and other platforms</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Stockreports+</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>GTT</a><br />
        </div>
      </div>

      {/* Second Row of Cards */}
      <div className="row px-5 mx-5 mb-5">
        <div className="col-4 mb-5">
          <h4 className="fs-5 mb-3 text-dark">
            <i className="fa fa-credit-card me-2" aria-hidden="true"></i> Funds
          </h4>
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Adding Funds</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Fund Withdrawal</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>eMandates</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Adding Bank Accounts</a><br />
        </div>

        <div className="col-4 mb-5">
          <h4 className="fs-5 mb-3 text-dark">
            <i className="fa fa-terminal me-2" aria-hidden="true"></i> Console
          </h4>
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Reports</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Ledger</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Portfolio</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>60 Day Challenge</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>IPO</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Referral Program</a><br />
        </div>

        <div className="col-4 mb-5">
          <h4 className="fs-5 mb-3 text-dark">
            <i className="fa fa-coins me-2" aria-hidden="true"></i> Coin
          </h4>
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Understanding Mutual Funds</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>About Coin</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Buying and Selling through Coin</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Starting an SIP</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Managing your Portfolio</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Coin App</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Moving to Coin</a><br />
          <a href="#" className="text-decoration-none" style={{ lineHeight: "2.5", fontSize: "0.95rem" }}>Government Securities</a><br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;