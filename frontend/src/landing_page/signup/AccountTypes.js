import React from "react";

function AccountTypes() {
  const accounts = [
    {
      icon: "fa-regular fa-user",
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
    },
    {
      icon: "fa-solid fa-people-group",
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
    },
    {
      icon: "fa-solid fa-globe",
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
    },
    {
      icon: "fa-regular fa-face-smile",
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future",
    },
    {
      icon: "fa-regular fa-building",
      title: "Corporate / LLP / Partnership",
      desc: "Manage your business surplus and investments easily",
    },
  ];

  return (
    <div className="container py-4" style={{marginLeft:"10%",marginRight:"10%"}}>
      <h2 className="text-center fs-4 mb-5">
        Explore different account types
      </h2>

      <div className="row g-5 fs-5">
        {accounts.map((account, index) => (
          <div key={index} className="col-lg-4 col-md-3">
            <div className="account-card">
              <div className="icon-circle">
                <i className={account.icon}></i>
              </div>

              <h3 className="fs-5">{account.title}</h3>

              <p>{account.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountTypes;