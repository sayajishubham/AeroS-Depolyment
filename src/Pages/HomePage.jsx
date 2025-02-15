import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };
  const [productdata, setproductdata] = useState([]);
  const getproductdata = () => {
    axios
      .get("https://aero-new-backend.onrender.com/product")
      .then((res) => setproductdata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproductdata();
  }, []);

  const prod = productdata.map((el) => (
    <div
      style={{ width: "60%", margin: "2% auto", textAlign: "center" }}
      key={el.id}
    >
      <br />
      <Link to={`/description/${el.id}`}>
        {" "}
        <img src={el.colors[0].image} height={250} width={250} alt="" />
      </Link>
      <h5>{el.title}</h5>
      <h4>${el.price}</h4>
    </div>
  ));
  return (
    <div>
      {/* Updates Promo */}
      <div className="UpdatesPromo">
        <div className="UpdatePromoLiveBox">
          <div>
            <h5>Shorts</h5>
            <h5>$12 & UP *</h5>
          </div>
          <div className="UpdatePromoLinks">
            <h4>Women Men</h4>
          </div>
        </div>
        <div className="UpdatePromoLiveBox">
          <div>
            <h5>UP TO 50% OFF </h5>
            <h5>NEW ARRIVALS</h5>
          </div>
          <div className="UpdatePromoLinks">
            <h4>Women Men</h4>
          </div>
        </div>
        <div className="UpdatePromoLiveBox">
          <div>
            <h4>Women Men</h4>
          </div>
          <div className="UpdatePromoLinks">
            <h4>Women Men</h4>
          </div>
        </div>
      </div>

      {/* Yellow Banner */}
      <div className="yellowBanner w-100">
        <div className="container">
          <div className="row d-flex justify-content-around w-100 align-items-center">
            <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9">
              <img
                src="http://localhost:3000/image/photo1.png"
                alt=""
                className="img-fluid"
              />{" "}
            </div>
            <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="AeroBtsDeals m-auto ">
                <h4>Women Men</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Products Carousel */}
      <div className="container">
        <Carousel
          style={{ width: "50%", margin: "auto", border: "2px solid black" }}
          responsive={responsive}
        >
          {prod}
        </Carousel>
      </div>

      {/* Jeans Shipping */}
      <div className="JeansShipping">
        <img
          src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw0b50d559/images/2024/Home/073124/B-POT%20JEANS%20BOGO.%20DT-min.png"
          alt=""
          className="jeansShippingText"
        />
      </div>

      {/* HelloKitty */}
      <div className="HelloKitty">
        <img
          src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw2f2a3691/images/2024/Home/073124/C-SPOT%20HK%20AERO%20DT-min.png"
          alt=""
          className="helloKittyText"
        />
      </div>

      {/* AEROFORALL Banner*/}
      <div className="AEROFORALLBanner">
        <div className="aeroforalltext">
          <img
            src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dwd88a37c5/images/2024/Home/073124/D-SPOT%20AERO%20FOR%20ALL%20LOGO-min.png"
            alt=""
            className="aeroforimg"
          ></img>
          <h3>FEAT.AERO ESSENTIALS</h3>
          <p className="fs-5">
            Oversized fleece for all. Shop new styles made with the planet in
            mind
          </p>
          <button className="p-1 fs-5 border-rounded rounded-3 border-0">
            Shop Now
          </button>
        </div>
      </div>

      {/* Blue Images */}
      <div className="BlueImages  d-flex justify-content-around">
        <div>
          <h1>A SHORT STORY</h1>
          <h3>Never Short On Style(s).</h3>
        </div>
        <img
          src="https://www.aeropostale.com/on/demandware.static/-/Sites-aeropostale-Library/default/dw25fa6242/images/2024/Home/072424/Shorts%20Badge-min.png"
          alt=""
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default HomePage;
