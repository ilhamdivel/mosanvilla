import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/picture/img-hero.jpg";
import ImageHeroFrame from "assets/images/picture/img-hero-frame.jpg";


import Button from "elements/Button";



export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });

    
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          {/* Column Left */}
          <div className="col-auto pr-5" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Belum punya tujuan? <br />
              Sini kami bantu
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Kami menyediakan apa yang anda butuhkan untuk menikmati
            liburan bersama keluarga. Saatnya membuat momen yang tak terlupakan.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
          </div>
          {/* Column Left */}
          {/* Column Right */}
          <div className="col-6 pl-5">
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt="Room with couches"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with couches frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
          {/* Column Right */}
        </div>
      </section>
    </Fade>
  );
}
