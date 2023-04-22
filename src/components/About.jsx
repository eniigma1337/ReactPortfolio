import React from "react";
import MyImage from "../assets/me.jpg";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const About = () => {
  return (
    <section className="bg-secondary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <div className="flex py-5 ">
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineMail size={60} />
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineLinkedin size={60} />
            </a>
            <a
              href="#"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineGithub size={60} />
            </a>
          </div>
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-green-600 pb-2">
            About Me
          </h2>

          <p className="pb-4">
            Hi, My Name Is Anurag Negi. I am a an aspring Software Developer. I
            build websites and apps!
          </p>
          <p className="pb-4">
            I am proficient in skills such as Javascript, React.js, iOS and
            Android Development.
          </p>

          <p className="pb-4">
            Backend Knowledge includes Node.js, Express.js, MongoDB, FireStore and SQL
          </p>

          <p className="pb-4">
            In my spare time I am an avid Gamer, passionate Music Lover and also
            love Trivia.
          </p>
        </div>

        <div className="ml-5">
          <img src={MyImage} />
        </div>
      </div>
    </section>
  );
};

export default About;
