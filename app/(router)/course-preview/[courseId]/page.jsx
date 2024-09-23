"use client";
import React, { useEffect, useState } from "react";
import CourseVideoDescription from "./components/CourseVideoDescription";
import GlobalApi from "@/app/_utils/GlobalApi";
import CourseEnrollSection from "./components/CourseEnrollSection";
import CourseContentSection from "./components/CourseContentSection";
import { useUser } from "@clerk/nextjs";

function CoursePreview({ params }) {
  const { user } = useUser();
  const [courseInfo, setCourseInfo] = useState(null);
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (params?.courseId) {
      console.log("Fetching course with ID:", params.courseId);
      getCourseInfoById(params.courseId);
    }
  }, [params]);

  useEffect(() => {
    if (courseInfo && user) {
      checkUserEnrolledToCourse();
    }
  }, [courseInfo, user]);

  const getCourseInfoById = async (courseId) => {
    try {
      const resp = await GlobalApi.getCourseById(courseId);
      console.log("API Response Structure:", resp);
      setCourseInfo(resp?.courseList || null);
    } catch (error) {
      console.error("Error fetching course information:", error);
      setError(error.message);
    }
  };

  const checkUserEnrolledToCourse = async () => {
    try {
      const resp = await GlobalApi.checkUserEnrolledToCourse(
        courseInfo.slug,
        user.primaryEmailAddress.emailAddress
      );
      if (resp?.userEnrolledCourses[0]?.id) {
        console.log(resp);
        setIsUserAlreadyEnrolled(true);
      }
    } catch (error) {
      console.error("Error checking user enrollment:", error);
    }
  };

  return (
    courseInfo ? (
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
          <CourseEnrollSection
            courseInfo={courseInfo}
            isUserAlreadyEnrolled={isUserAlreadyEnrolled}
          />
          <CourseContentSection courseInfo={courseInfo} />
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )
  );
}

export default CoursePreview;
