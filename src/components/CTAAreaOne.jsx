import React from "react";
import { Link } from "react-router-dom";
import cta from "../assets/img/bg/cta-bg1-1.png";
import whatsappIcon from "../../src/assets/img/icon/new-500.png";
import call from "../../src/assets/img/icon/call (1).png";

const CTAAreaOne = () => {
  return (
    <div className="cta-area-1">
      <div className="cta1-bg-thumb">
        <img src={cta} alt="800speedy"/>
      </div>
      <div className="container">
        <div className="cta-wrap1">
          <div className="row justify-content-md-between align-items-center">
            <div className="col-lg-6 col-md-8">
              <div className="title-area mb-md-0">
                <span className="sub-title style2 text-white">Contact us</span>
                <h2 className="sec-title text-white mb-0">
                  When Tyres Fail,  We Arrive in 20 Minutes
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="title-area mb-0">
               <a
  href="https://wa.me/+971543170355"
  target="_blank"
  rel="noopener noreferrer"
  className="custom-btn whatsapp-btn wobble-btn"
  style={{ padding: "8px 12px" }}
>
  <img
    src={whatsappIcon}
    alt="WhatsApp"
    className="btn-icon"
    style={{ width: "20px", height: "20px" }}
  />
  <span style={{ color: "#000" }}>WhatsApp Us</span>
</a>
      
        
      <a
  href="tel:+971543170355"
  className="custom-btn call-btn wobble-btn"
  style={{ padding: "8px 12px" }}
>
  <img
    src={call}
    alt="Call Us"
    className="btn-icon"
    style={{ width: "20px", height: "20px" }}
  />
  <span style={{ color: "#000" }}>Call Us</span>
</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAAreaOne;
