import React from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


function Universe() {
 const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row mt-5  text-center">
        <h1 className=" mb-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5  text-center">
        <div className="col-4 text-center p-3">
          <img src="./assets/smallcaseLogo.png" alt="Partner 1" />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 text-center p-3">
          <img src="./assets/streakLogo1.png" alt="Partner 2" />
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>
        <div className="col-4 text-center p-3">
          <img src="./assets/sensibullLogo.svg" alt="Partner 3" />
          <p className="text-muted text-small">Options trading platform</p>
        </div>
      </div>

      <div className="row mt-5 text-center mb-5">
        <div className="col-4 text-center p-3">
          <img src="./assets/zerodhaFundhouse1.png" alt="Partner 1" />
          <p className="text-muted text-small">Asset management</p>
        </div>
        <div className="col-4 text-center p-3">
          <img src="./assets/goldenpiLogo.png" alt="Partner 2" />
          <p className="text-muted text-small">Bonds trading platform</p>
        </div>
        <div className="col-4 text-center p-3">
          <img src="./assets/dittoLogo1.png" alt="Partner 3" />
          <p className="text-muted text-small">Insurance advisory platform</p>
        </div>
      </div>
         <div className="row text-center">
              
                    
                    <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto",backgroundColor:"rgb(56, 126, 209)"}}  onClick={() => navigate("/signup")}>Sign up Now</button>
                </div>
     

    </div>
  );
}

export default Universe;
