import React from "react";
import {
    AiOutlineMail,
    AiOutlineLinkedin,
    AiOutlineGithub,
  } from "react-icons/ai";
const Contact = () => {
  return (
    <section className="bg-secondary px-5 py-32" id="contact">
      <div className="text-center lg:w-[60%] mx-auto text-white">
        <h2 className="text-3xl font-bold mb-5  w-[200px] mx-auto border-b-[4px] border-green-600 pb-2">
          Contact Info
        </h2>
        <p>
            Currently Looking For Junior Developer Roles!
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> anuragn.0505@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +1 4165054697
        </p>
      </div>
      <div className="text-center px-auto py-5 mx-auto">
            <a
              href="#"
              className="pr-5 inline-block text-accent hover:text-white"
            >
              <AiOutlineMail size={40} />
            </a>
            <a
              href="#"
              className="pr-5 inline-block text-accent hover:text-white"
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              href="#"
              className="pr-5 inline-block text-accent hover:text-white"
            >
              <AiOutlineGithub   size={40} />
            </a>
          </div>
    </section>
  );
};

export default Contact;
