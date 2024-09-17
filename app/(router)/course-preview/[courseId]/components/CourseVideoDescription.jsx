"use client";
import React from "react";
import VideoPlayer from "./VideoPlayer";

function CourseVideoDescription({ courseInfo }) {
  console.log("Course info in description component:", courseInfo); // Log courseInfo here

  // Extract video URL from courseInfo
  const videoUrl = courseInfo?.youtubeUrl || courseInfo?.demoUrl;

  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
      <h2 className="text-gray-500 text-[14px]">{courseInfo?.author}</h2>
      {/* Video Player */}
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
    </div>
  );
}

export default CourseVideoDescription;
// import React from "react";
// import VideoPlayer from "./VideoPlayer";

// function CourseVideoDescription({ courseInfo }) {
//   console.log("Course info in description component:", courseInfo); // Log courseInfo here

//   // Extract video URL from courseInfo
//   const videoUrl = courseInfo?.youtubeUrl || courseInfo?.demoUrl;

//   return (
//     <div>
//       <h2 className="text-[20px] font-semibold">{courseInfo?.name}</h2>
//       <h2 className="text-gray-500 text-[14px]">{courseInfo?.author}</h2>
//       {/* Video Player */}
//       {videoUrl ? (
//         <VideoPlayer videoUrl={videoUrl} />
//       ) : (
//         <p>No video available</p>
//       )}
//     </div>
//   );
// }

// export default CourseVideoDescription;
