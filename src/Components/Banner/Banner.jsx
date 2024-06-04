// import React, { useRef } from "react";
// import banner1 from "../../assets/BannerImg/Group 3.png";
// import banner2 from "../../assets/BannerImg/Group 4.png";
// import banner3 from "../../assets/BannerImg/Group 5.png";
// import { useGSAP } from "@gsap/react";
// import { gsap } from "gsap";
// // import "./Banner.css";

// const Banner = () => {

//   const container = useRef()
//   useGSAP(() => {
//       const tl = gsap.timeline()
//       tl.to('banner1', {opacity: 0, stagger: 0.1, rotation: 360})
//         .to('banner2', {opacity: 0, stagger: 0.1, rotation: 360}, "=-0.1")
//         .to('banner3', {opacity: 0, stagger: 0.1, rotation: 360}, "=-0.1")
//         tl.play()
//   }, {})


//   return (
//     <div ref={container} className="banner-section">
//       <div className="banner-images">
//         <img className="banner1" src={banner1} alt="Banner 1" />
//         <img className="banner2" src={banner2} alt="Banner 2" />
//         <img className="banner3" src={banner3} alt="Banner 3" />
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import banner1 from '../../assets/BannerImg/Group 3.png';
import banner2 from '../../assets/BannerImg/Group 4.png';
import banner3 from '../../assets/BannerImg/Group 5.png';

const BannerComponent = () => {
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to('.banner1', { opacity: 1, stagger: 0.1,})
      .to('.banner2', { opacity: 1, stagger: 0.1,}, '-=0.1')
      .to('.banner3', { opacity: 1, stagger: 0.1,}, '-=0.1');

    tl.play();
  }, []); // empty dependency array ensures this effect runs once after mount

  return (
    <div ref={container} className="banner-section">
      <div className="banner-images">
        <img className="banner1" src={banner1} alt="Banner 1" />
        <img className="banner2" src={banner2} alt="Banner 2" />
        <img className="banner3" src={banner3} alt="Banner 3" />
      </div>
    </div>
  );
};

export default BannerComponent;

