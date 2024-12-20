import React from "react";
import Button from "../layouts/Button";

const Blogs = () => {
  const videoData = [
    { id: "l_jK3D70KUc", title: "Success Stories of Recovery" },
    { id: "SOSTSH5N0jw", title: "Success Stories of Recovery" },
    { id: "XqI4fZqGJ3o", title: "Success Stories of Recovery" },
    { id: "q4nYnovaWSY", title: "Success Stories of Recovery" },
    { id: "IIeuF8ckNGE", title: "Life at a Rehabilitation Center" },
    { id: "guUT-WdP7qg", title: "Success Stories of Recovery" },
  ];

  return (
    <div
      id="blog" // This ID should match the "to" prop in your Link
      className="min-h-screen flex flex-col justify-center px-5 md:px-10 lg:px-32 pt-24"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center lg:flex-row justify-between text-center lg:text-start gap-4 lg:gap-0">
        <div>
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Dhara Nasha Mukti Kendra
          </h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg">
            Dhara Nasha Mukti Kendra
          </p>
        </div>
        <div>
          <Button title="Browse Our Articles" />
        </div>
      </div>

      {/* Video Section */}
      <div className="my-12">
        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8">
          Watch Dhara Nasha Mukti Kendra Blog's
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData.map((video, index) => (
            <div key={index} className="relative w-full">
              <iframe
                className="w-full h-[250px] sm:h-[300px] rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <h3 className="text-center mt-2 text-lg font-semibold">
                {video.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex justify-center mt-8">
        <Button title="Explore More Physiotherapy Articles" />
      </div>
    </div>
  );
};

export default Blogs;
