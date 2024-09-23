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

  // Fetch course information when params change
  useEffect(() => {
    if (params?.courseId) {
      console.log("Fetching course with ID:", params.courseId);
      getCourseInfoById(params.courseId);
    } else {
      console.error("No courseId found in params");
    }
  }, [params]);

  // Check if the user is enrolled in the course once courseInfo and user are available
  useEffect(() => {
    if (courseInfo && user) {
      console.log(
        "Checking if user is enrolled to the course:",
        courseInfo.slug
      );
      checkUserEnrolledToCourse();
    }
  }, [courseInfo, user]);

  // Updated function to fetch course information by ID
  const getCourseInfoById = async (courseId) => {
    try {
      const resp = await GlobalApi.getCourseById(courseId);
      console.log("Fetched course data:", resp);

      // Check if resp is valid and directly use it
      if (resp) {
        setCourseInfo(resp); // Set the fetched course data directly
      } else {
        console.error("No course data found.");
        setError("No course data found.");
      }
    } catch (error) {
      console.error("Error fetching course information:", error);
      setError("Failed to fetch course information.");
    }
  };

  // Function to check if the user is enrolled in the course
  const checkUserEnrolledToCourse = async () => {
    if (!courseInfo?.slug) {
      console.error("Course slug not found.");
      return;
    }

    if (!user?.primaryEmailAddress?.emailAddress) {
      console.error("User email not found.");
      return;
    }

    try {
      const resp = await GlobalApi.checkUserEnrolledToCourse(
        courseInfo.slug,
        user.primaryEmailAddress.emailAddress
      );
      if (resp?.userEnrolledCourses[0]?.id) {
        console.log("User is enrolled in the course:", resp);
        setIsUserAlreadyEnrolled(true);
      } else {
        console.log("User is not enrolled in the course.");
      }
    } catch (error) {
      console.error("Error checking user enrollment:", error);
      setError("Failed to check user enrollment.");
    }
  };

  return courseInfo ? (
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
    <div>Loading course information...</div>
  );
}

export default CoursePreview;
