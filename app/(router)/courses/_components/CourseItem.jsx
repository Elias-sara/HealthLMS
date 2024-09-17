"use client";
import React from "react";
import Image from "next/image";

function CourseItem({ course }) {
  const imageUrl = course?.banner?.url || "/path/to/fallback-image.jpg";

  return (
    <div className="border rounded-xl hover:shadow-md hover:shadow-purple-300 cursor-pointer">
      <Image
        src={imageUrl}
        width={500}
        height={300}
        alt="banner"
        className="rounded-t-xl"
      />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="font-medium text-[20px]">{course.name}</h2>
        <h2 className="text-[12px] text-gray-500">
          {course.description || "No description"}
        </h2>
        {course?.chapter?.length === 0 ? (
          <div className="flex gap-2">
            <Image src="/youtube.png" alt="youtube" width={40} height={40} />
            <h2 className="text-[12px] text-gray-500">Watch On YouTube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image src="/chapter.png" alt="chapter" width={40} height={40} />
            <h2 className="text-[12px] text-gray-400">Chapters</h2>
          </div>
        )}
        <h2 className="text-[12px]">{course?.free ? "Free" : "Paid"}</h2>
      </div>
    </div>
  );
}

export default CourseItem;
// import React from "react";
// import Image from "next/image";

// function CourseItem({ course }) {
//   const imageUrl = course?.banner?.url || "/path/to/fallback-image.jpg";

//   return (
//     <div className="border rounded-xl hover:shadow-md hover:shadow-purple-300 cursor-pointer">
//       <Image
//         src={imageUrl}
//         width={500}
//         height={300}
//         alt="banner"
//         className="rounded-t-xl"
//       />
//       <div className="flex flex-col gap-1 p-2">
//         <h2 className="font-medium text-[20px]">{course.name}</h2>
//         <h2 className="text-[12px] text-gray-500">
//           {course.description || "No description"}
//         </h2>
//         {course?.chapter?.length === 0 ? (
//           <div className="flex gap-2">
//             <Image src="/youtube.png" alt="youtube" width={40} height={40} />
//             <h2 className="text-[12px] text-gray-500">Watch On YouTube</h2>
//           </div>
//         ) : (
//           <div className="flex gap-2">
//             <Image src="/chapter.png" alt="chapter" width={40} height={40} />
//             <h2 className="text-[12px] text-gray-400">Chapters</h2>
//           </div>
//         )}
//         <h2 className="text-[12px]">{course?.free ? "Free" : "Paid"}</h2>
//       </div>
//     </div>
//   );
// }

// export default CourseItem;
