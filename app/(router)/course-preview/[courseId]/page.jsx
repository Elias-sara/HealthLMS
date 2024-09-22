"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnrollSection from "./components/CourseEnrollSection";
import CourseContentSection from "./components/CourseContentSection";

function CoursePreview({ params }) {
  const [courseInfo, setCourseInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params?.courseId) {
      console.log("Fetching course with ID:", params.courseId);
      getCourseInfoById(params.courseId);
    }
  }, [params]);

  const getCourseInfoById = async (courseId) => {
    try {
      const resp = await GlobalApi.getCourseById(courseId);
      console.log("Fetched course info:", resp);
      setCourseInfo(resp);
    } catch (error) {
      console.error("Error fetching course information:", error);
      setError(error.message);
    }
  };

  return (
    courseInfo && (
      <div className="grid grid-cols-1 md:grid-cols-3 p-5 gap-3">
        {/* Video Description and title */}
        <div className="col-span-2 bg-white p-3">
          {error ? (
            <div className="text-red-500">{error}</div>
          ) : (
            <CourseVideoDescription courseInfo={courseInfo} />
          )}
        </div>
        {/* Course Content */}
        <div>
          <CourseEnrollSection courseInfo={courseInfo}/>

          <CourseContentSection courseInfo={courseInfo} />
        </div>
      </div>
    )
  );
}

export default CoursePreview;
