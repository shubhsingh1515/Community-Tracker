"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const StackSlider: React.FC = () => {
  return (
    <div className="py-5 lg:py-10 ">
      <p className="text-center text-gray-600 mb-12 text-sm md:text-base">
        Be part of the 100+ businesses transforming their digital presence.
      </p>
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        <img
          src="/techStack/ubuntu.webp"
          alt="techStack 1"
          className="h-16 mx-8"
        />
        <img src="/techStack/n8n.svg" alt="techStack 2" className="h-16 mx-8" />
        <img
          src="/techStack/twilio.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/linux.svg"
          alt="techStack 4"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/firebase.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/mern.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/mongoDb.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/mySql.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/nextJs.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/nodeJs.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img src="/techStack/php.svg" alt="techStack 3" className="h-16 mx-8" />
        <img
          src="/techStack/postgreSql.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/react.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/redis.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        <img
          src="/techStack/vite.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
        {/* <img
          src="/techStack/wordpress.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        /> */}
        <img src="/techStack/xml.svg" alt="techStack 3" className="h-16 mx-8" />
        <img
          src="/techStack/python.svg"
          alt="techStack 3"
          className="h-16 mx-8"
        />
      </Marquee>
    </div>
  );
};

export default StackSlider;