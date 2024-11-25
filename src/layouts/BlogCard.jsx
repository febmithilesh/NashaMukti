import React from "react";

const BlogCard = ({ videoId, headlines, description }) => {
  return (
    <div className="w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      {/* Embed YouTube Video */}
      <div className="relative w-full h-64 md:h-96 lg:h-40 rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={headlines}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Title and Description */}
      <h2 className="text-lg text-center font-semibold">{headlines}</h2>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};

export default BlogCard;