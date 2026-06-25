import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return (
        <div className="container mt-5 ">
            <div className="row ">
                <div className="col-6 "> <img src={imageURL}  /> </div>
                 <div className="col-6 p-5 mt-3">
                    <h1>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>

                    <div>
                        <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    <a href={learnMore} style={{ textDecoration: "none", marginLeft: "50px" }}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>

                    </div>

                    <div className='mt-3'>
                         <a href={googlePlay} ><img src="./assets/googlePlayBadge.svg" alt="Google Play" /></a>
                    <a href={appStore}  style={{ textDecoration: "none", marginLeft: "50px" }}><img src="./assets/appStoreBadge.svg" alt="App Store" /></a>

                    </div>
                    
                   
                 </div>
            </div>
           
        </div>
      );
};

export default LeftSection;