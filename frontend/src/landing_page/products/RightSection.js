import React from "react";
function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5 ">
      <div className="row ">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          <a
            href={learnMore}
            style={{ textDecoration: "none", marginRight: "50px" }}
          >
            Learn More <i class="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="col-6 ">
          {" "}
          <img src={imageURL} />{" "}
        </div>
      </div>
    </div>
  );
}

export default RightSection;
