import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function CourseEnrollSection({ courseInfo }) {
  const membership = false;
  const { user } = useUser();

  const router = useRoute();
  //Enroll to the Course
  const onEnrollCourse = () => {
    GlobalApi.enrollToCourse(
      courseInfo?.slug.user?.primaryEmailAddress?.emailAddress
    ).then((resp) => {
      console.log(resp);
      if (resp) {
        //show toast on successful enroll

        //redirect to watch course
        router.push("/watch-course/" + resp.createUserEnrolledCourse.id);
      }
    });
  };
  return (
    <div className="p-3 text-center rounded-sm bg-primary ">
      <h2 className="text-[20px] font-bold text-white">Enroll to the Course</h2>
      {/* Use has Membership and Already login */}
      {user && (membership || courseInfo.free) ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to start Learning and Building the project
          </h2>
          <Button
            className="bg-white text-primary hover:bg-white
    hover:text-primary"
            onClick={() => onEnrollCourse()}
          >
            Enroll Now
          </Button>
        </div>
      ) : !user ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to start Learning and Building the project
          </h2>
          <Link href={"/sign-in"}>
            <Button
              className="bg-white text-primary hover:bg-white
    hover:text-primary"
            >
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and Get Access To All Courses
          </h2>
          <Button
            className="bg-white text-primary hover:bg-white
    hover:text-primary"
          >
            Buy Membership Just $2.99
          </Button>
        </div>
      )}
      {/* About Section User Does not Membership or not Signup/Login */}
    </div>
  );
}

export default CourseEnrollSection;
