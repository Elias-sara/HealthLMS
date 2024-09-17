// "use client";
// import GlobalApi from "@/app/_utils/GlobalApi";
// import React, { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import CourseItem from "./CourseItem";
// import Link from "next/link";

// function CourseList() {
//   const [courseList, setCourseList] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const resp = await GlobalApi.getAllCourseList();
//         console.log(resp);
//         setCourseList(resp?.courseLists || []);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-5 bg-white rounded-lg mt-5">
//       {/* Title and Filter */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
//         <Select>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filter" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="light">All</SelectItem>
//             <SelectItem value="dark">Paid</SelectItem>
//             <SelectItem value="system">Free</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
//         {/* Display Course List */}
//         {courseList.length > 0
//           ? courseList.map((item, index) => (
//               <Link href={"/course-preview/" + item.slug}>
//                 <div key={index}>
//                   <CourseItem course={item} />
//                 </div>
//               </Link>
//             ))
//           : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
//               <div
//                 key={item}
//                 className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
//               ></div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default CourseList;
// import GlobalApi from "@/app/_utils/GlobalApi";
// import React, { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import CourseItem from "./CourseItem";
// import Link from "next/link";

// function CourseList() {
//   const [courseList, setCourseList] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const resp = await GlobalApi.getAllCourseList();
//         console.log(resp);
//         setCourseList(resp?.courseLists || []);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-5 bg-white rounded-lg mt-5">
//       {/* Title and Filter */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
//         <Select>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filter" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All</SelectItem>
//             <SelectItem value="paid">Paid</SelectItem>
//             <SelectItem value="free">Free</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
//         {/* Display Course List */}
//         {courseList.length > 0
//           ? courseList.map((item) => (
//               <Link key={item.id} href={`/course-preview/${item.slug}`}>
//                 <CourseItem course={item} />
//               </Link>
//             ))
//           : [1, 2, 3, 4, 5, 6, 7].map((item) => (
//               <div
//                 key={item}
//                 className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
//               ></div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default CourseList;
// "use client";
// import GlobalApi from "@/app/_utils/GlobalApi";
// import React, { useEffect, useState } from "react";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import CourseItem from "./CourseItem";
// import Link from "next/link";

// function CourseList() {
//   const [courseList, setCourseList] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const resp = await GlobalApi.getAllCourseList();
//         console.log(resp);
//         setCourseList(resp?.courseLists || []);
//       } catch (error) {
//         console.error("Error fetching courses:", error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-5 bg-white rounded-lg mt-5">
//       {/* Title and Filter */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
//         <Select>
//           <SelectTrigger className="w-[180px]">
//             <SelectValue placeholder="Filter" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="all">All</SelectItem>
//             <SelectItem value="paid">Paid</SelectItem>
//             <SelectItem value="free">Free</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
//         {/* Display Course List */}
//         {courseList.length > 0
//           ? courseList.map((item) => (
//               <Link key={item.id} href={`/course-preview/${item.slug}`}>
//                 <div>
//                   <CourseItem course={item} />
//                 </div>
//               </Link>
//             ))
//           : [1, 2, 3, 4, 5, 6, 7].map((item) => (
//               <div
//                 key={item}
//                 className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
//               ></div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default CourseList;


"use client";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Link from "next/link";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const result = await GlobalApi.getAllCourseList();
        console.log("Fetched Courses:", result); // Ensure this logs correctly
        setCourseList(result); // Adjust if the shape is different
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <div className="p-5 bg-white rounded-lg mt-5">
      {/* Title and Filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
        {/* Display Course List */}
        {courseList.length > 0
          ? courseList.map((item) => (
              <Link key={item.id} href={`/course-preview/${item.slug}`}>
                <div>
                  <CourseItem course={item} />
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div
                key={item}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
