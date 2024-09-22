"use client";
import React from "react";
import VideoPlayer from "./VideoPlayer";
import Markdown from "react-markdown";

function CourseVideoDescription({ courseInfo }) {
  return (
    <div className="border p-5 rounded-lg shadow-md bg-white">
      <h2 className="text-[20px] font-semibold">{courseInfo.name}</h2>
      <h2 className="text-gray-500 text-[14px]">{courseInfo.author}</h2>
      <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url} />
      <h2 className="mt-5 text-[17px] font-semibold">About This Course</h2>

      {/* Display only the first chapter's description */}
      {courseInfo.chapter.length > 0 && (
        <div className="mt-4">
          <h3 className="font-medium text-[16px]">
            {courseInfo.chapter[0].name}
          </h3>
          <div className="text-[13px] font-light mt-2 leading-7 max-w-full overflow-hidden break-words">
            <Markdown>{courseInfo.chapter[0].description}</Markdown>
          </div>
          <p className="text-gray-600 text-[14px] mt-2 max-w-full overflow-hidden break-words">
            {courseInfo.chapter[0].shortDesc}
          </p>
        </div>
      )}
    </div>
  );
}

export default CourseVideoDescription;
