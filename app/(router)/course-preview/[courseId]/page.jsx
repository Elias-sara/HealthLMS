"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi"; // Adjust the import path as necessary

function CoursePreview({ params }) {
  const [courseInfo, setCourseInfo] = useState(null);

  useEffect(() => {
    if (params?.courseId) {
      getCourseInfoById();
    }
  }, [params]);

  /** Used to get Course Info By Slug/Id Name */
  const getCourseInfoById = async () => {
    try {
      const resp = await GlobalApi.getCourseById(params?.courseId);
      setCourseInfo(resp.courseList);
    } catch (error) {
      console.error("Error fetching course information:", error);
    }
  };
  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Title Video, Description */}
        <div className="col-span-2 bg-white p-3">
          <CourseVideoDescription courseInfo={courseInfo} />
        </div>
        {/* Course Content */}
        <div>{/* Add additional course content here if needed */}</div>
      </div>
    )
  );
}

export default CoursePreview;
// import React, { useEffect, useState } from "react";
// import CourseVideoDescription from "./components/CourseVideoDescription";
// import GlobalApi from "@/app/_utils/GlobalApi"; // Adjust the import path as necessary

// function CoursePreview({ params }) {
//   const [courseInfo, setCourseInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (params?.courseId) {
//       getCourseInfoById();
//     }
//   }, [params]);

//   /** Used to get Course Info By Slug/Id Name */
//   const getCourseInfoById = async () => {
//     try {
//       const resp = await GlobalApi.getCourseById(params?.courseId);
//       setCourseInfo(resp.courseList);
//     } catch (error) {
//       console.error("Error fetching course information:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!courseInfo) {
//     return <div>Course not found</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
//       {/* Title Video, Description */}
//       <div className="col-span-2 bg-white p-3">
//         <CourseVideoDescription courseInfo={courseInfo} />
//       </div>
//       {/* Course Content */}
//       <div>{/* Add additional course content here if needed */}</div>
//     </div>
//   );
// }

// export default CoursePreview;
