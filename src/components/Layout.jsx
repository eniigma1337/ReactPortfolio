import React from "react";
import WaveImg from "../assets/wave.png";

const Layout = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl intro">
            Hi There! <br />I am Anurag
            <br />
            Aspiring Developer
            <br />
          </h1>

          <p className="py-5">
            I am an up-and-coming Developer specialising in Mobile App and Web Development!
          </p>
        </div>

        <div>
          <img
            src={WaveImg}
          />
        </div>
      </div>
    </section>
  );
};

export default Layout;
