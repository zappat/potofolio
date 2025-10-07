import React from "react";

const OfficeTour = () => {
  return (
    <div className="flex items-center justify-center my-20">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Take a tour of my office
          </h2>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum
            quasi assumenda culpa praesentium consectetur voluptatibus expedita.
            Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio
            velit, nemo dolorem voluptas!
          </p>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
            qui aspernatur unde mollitia, in laborum.
          </p>
        </div>

        {/* Right Content (YouTube Iframe) */}
        <div className="relative rounded-lg overflow-hidden aspect-video">
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZKJPuudGX2c?si=_gt0cFdck74j4mpY"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QYLastNcE_Q?si=8teFGNuRBDFGxZa5"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OfficeTour;
