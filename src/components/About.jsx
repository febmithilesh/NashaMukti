import React from "react";
import img from "../assets/img/AN5.jpg";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-8">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h1 className="text-3xl lg:text-4xl font-semibold text-center lg:text-start">
        Best Dhara Nasha Mukti Kendra in Patna, Bihar
        </h1>
        <p className="text-base lg:text-lg text-justify lg:text-start leading-relaxed">
       <strong>Experienced doctors, </strong>
        counselors, and therapists.<br></br>
        Personalized care tailored to individual needs.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id et, quae ut at recusandae possimus nemo facere! Earum maxime ipsum laborum error reiciendis eaque ut!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus molestias architecto ullam quibusdam doloribus sed repellendus, quae at voluptatum, nobis eveniet ipsum et quod debitis quo facere repellat aperiam?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ducimus corrupti eligendi temporibus. A aliquam modi impedit, beatae ipsam animi maxime. Magnam, ullam rerum ipsa excepturi aliquam amet deleniti adipisci.
        </p>
        <p className="text-base lg:text-lg text-justify lg:text-start leading-relaxed">
       <strong>Holistic Treatment Programs</strong>
        Detoxification programs.<br></br>
        Rehabilitation therapies including yoga, meditation, and counseling.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit ducimus corrupti eligendi temporibus. A aliquam modi impedit, beatae ipsam animi maxime. Magnam, ullam rerum ipsa excepturi aliquam amet deleniti adipisci.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, temporibus. Molestiae quae deleniti perferendis error officia unde qui maiores nisi ipsa necessitatibus ratione, earum ea doloremque placeat modi harum commodi!
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <img
          className="rounded-lg object-cover w-full h-auto"
          src={img}
          alt="A physiotherapist assisting a patient"
        />
      </div>
    </div>
  );
};

export default About; 




