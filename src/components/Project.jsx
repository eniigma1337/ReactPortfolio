import React, { useState, useEffect } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.log(error.message));
  });

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[150px] border-green-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">Some of my Projects...</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((item) => {
          console.log(item);

          return (
            <div>
              <img src={item.image} alt={item.title} className="rounded-lg" />
              <h3 className="py-5 text-2xl text-center">{item.title}</h3>
              <h3 className="py-5 textl text-center">{item.content}</h3>
              <div className="flex flex-col mb-3">
              {item.languages.map((language) => (
                  <div className="p-2 mx-auto">
                    <span className="border border-green-500 rounded-lg px-2 py-1 inline-block">
                      {language}
                    </span>
                  </div>
                ))}
                <div className="my-2 p-2 mx-auto">
                  <a
                    href={item.url}
                    className="rounded-lg bg-accent border-2 border-[#00ae23] text-white px-6 py-3 hover:bg-transparent"
                  >
                    See Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
