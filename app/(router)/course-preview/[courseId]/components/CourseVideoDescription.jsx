"use client";
import React from "react";
import VideoPlayer from "./VideoPlayer";

function CourseVideoDescription({ courseInfo }) {
  if (!courseInfo) {
    return <div>Loading course information...</div>;
  }

  const videoUrl = courseInfo?.youtubeUrl || courseInfo?.demoUrl;

  return (
    <div>
      <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>
      <h2 className="text-gray-500 text-[14px]">{courseInfo.author}</h2>
      {videoUrl && <VideoPlayer videoUrl={videoUrl} />}
    </div>
  );
}

export default CourseVideoDescription;
// "use client";
// import React from "react";
// import VideoPlayer from "./VideoPlayer";

// function CourseVideoDescription({ courseInfo }) {
//   console.log("Course info in description component:", courseInfo);

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
//         <div>No video available for this course.</div>
//       )}
//     </div>
//   );
// }

// export default CourseVideoDescription;
// "use client";
// import React from "react";
// import VideoPlayer from "./VideoPlayer";

// function CourseVideoDescription({ courseInfo }) {
//   console.log("Course info in description component:", courseInfo);

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
//         <div>No video available for this course.</div>
//       )}
//     </div>
//   );
// }

// export default CourseVideoDescription;
// "use client";
// import React from "react";
// import VideoPlayer from "./VideoPlayer";

// function CourseVideoDescription({ courseInfo }) {
//   console.log("Course info in description component:", courseInfo);

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
//         <div>No video available for this course.</div>
//       )}
//     </div>
//   );
// }

// export default CourseVideoDescription;
