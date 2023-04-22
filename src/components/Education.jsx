import { useState, useEffect } from "react";

export default function Education() {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    fetch("/education.json")
      .then((res) => res.json())
      .then((data) => setEducations(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="py-32 bg-primary text-white text-center">
      <div>
        <h1 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] border-green-600 pb-2 mx-auto">Education</h1>
        {educations.map((education) => (
          <div class="flex flex-col items-center justify-center my-16">
            <h2 class="text-4xl font-bold mb-4">{education.name}</h2>
            <p class="text-lg text-center">{education.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
