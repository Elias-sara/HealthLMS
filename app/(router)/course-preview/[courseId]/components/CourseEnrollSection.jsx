import GlobalApi from "@/app/_utils/GlobalApi";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs"; // Uncommented
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "sonner";

function CourseEnrollSection({ courseInfo, isUserAlreadyEnrolled }) {
  const membership = false; // Placeholder for membership status
  const { user } = useUser(); // Get the user object

  const router = useRouter();

  useEffect(() => {
    console.log("isUserAlreadyEnrolled", isUserAlreadyEnrolled);
  }, [isUserAlreadyEnrolled]);

  // Enroll to the Course
  const onEnrolledCourse = () => {
    if (!user) {
      console.error("User not logged in.");
      return;
    }
    const courseId = courseInfo?.slug;
    const userEmail = user?.primaryEmailAddress?.emailAddress;

    if (!courseId || !userEmail) {
      console.error("Course ID or User Email is undefined.");
      return;
    }

    GlobalApi.enrollToCourse(courseId, userEmail)
      .then((resp) => {
        if (resp?.createUserEnrolledCourse?.id) {
          toast.success("Successfully enrolled in the course!");
          router.push("/watch-course/" + resp.createUserEnrolledCourse.id);
        } else {
          toast.error("Enrollment failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error enrolling in course:", error);
        toast.error("An error occurred: " + error.message);
      });
  };

  return (
    <div className="p-3 text-center rounded-sm bg-primary">
      <h2 className="text-[20px] font-bold text-white">Enroll to the Course</h2>
      {/* Check for user and membership status */}
      {user && (membership || courseInfo.free) ? (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Enroll Now to start Learning and Building the project
          </h2>
          <Button
            className="bg-white text-primary hover:bg-white hover:text-primary"
            onClick={onEnrolledCourse}
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
            <Button className="bg-white text-primary hover:bg-white hover:text-primary">
              Enroll Now
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-3">
          <h2 className="text-white font-light">
            Buy Monthly Membership and Get Access To All Courses
          </h2>
          <Button className="bg-white text-primary hover:bg-white hover:text-primary">
            Buy Membership Just $2.99
          </Button>
        </div>
      )}
    </div>
  );
}

export default CourseEnrollSection;
