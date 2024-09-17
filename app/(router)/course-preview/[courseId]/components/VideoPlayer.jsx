"use client";
// import React from "react";

// function VideoPlayer({ videoUrl }) {
//   return (
//     <video width={1000} height={250} controls className="rounded-sm">
//       <source src={videoUrl} type="video/mp4" />{" "}
//       {/* src={`https://www.youtube.com/embed/${new URL( */}
//     </video>
//   );
// }

// export default VideoPlayer;
import React from "react";

function VideoPlayer({ videoUrl }) {
  // Check if the URL is a YouTube link
  const isYouTube =
    videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");

  return (
    <div className="video-player">
      {isYouTube ? (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${new URL(
            videoUrl
          ).searchParams.get("v")}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <video width="100%" height="315" controls className="rounded-sm">
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
}

export default VideoPlayer;
