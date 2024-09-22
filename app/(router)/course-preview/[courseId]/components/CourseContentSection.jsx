import { Lock, Play } from "lucide-react";
import React, { useState } from "react";

function CourseContentSection({ courseInfo }) {
  const [activeIndex, setActiveIndex] = useState(0); // Correctly use useState

  //   const handleClick = (index) => {
  // setActiveIndex(index); // Update active index on click
  //   };

  return (
    <div className="p-3 bg-white rounded-sm mt-3">
      <h2>Contents</h2>
      {courseInfo.chapter.map((item, index) => (
        <div key={index}>
          {" "}
          {/* Added key prop for each item */}
          <h2
            onClick={() => handleClick(index)} // Add click handler
            className={`p-2 text-[14px] 
                        flex justify-between items-center m-2
                        hover:bg-gray-200 hover:text-gray-500
                        border rounded-sm px-4 cursor-pointer
                        ${
                          activeIndex === index ? "bg-primary text-white" : ""
                        }`} // Correct condition
          >
            {index + 1}. {item.name}
            {activeIndex == index ? (
              <Play className="h-4 w-4" />
            ) : (
              <Lock className="h-4 w-4" />
            )}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default CourseContentSection;
