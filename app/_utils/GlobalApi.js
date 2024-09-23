// import { request, gql } from "graphql-request";

// const MASTER_URL =
//   "https://us-west-2.cdn.hygraph.com/content/cm14xd3nb01bs07w59azor7un/master";

// const getAllCourseList = async () => {
//   const query = gql`
//     query GetAllCourses {
//       courseLists(first: 20, orderBy: createdAt_DESC) {
//         author
//         name
//         id
//         free
//         description
//         demoUrl
//         banner {
//           url
//         }
//         chapter {
//           ... on Chapter {
//             id
//             name
//             video {
//               url
//             }
//           }
//         }
//         twoChapters
//         sourceCode
//         tag
//         slug
//       }
//     }
//   `;

//   try {
//     const result = await request(MASTER_URL, query);
//     return result.courseLists;
//   } catch (error) {
//     console.error("Error fetching course list:", error);
//     throw error;
//   }
// };

// const getSideBanner = async () => {
//   const query = gql`
//     query GetSideBanner {
//       sideBanners {
//         id
//         name
//         banner {
//           id
//           url
//         }
//         url
//       }
//     }
//   `;

//   try {
//     const result = await request(MASTER_URL, query);
//     return result.sideBanners;
//   } catch (error) {
//     console.error("Error fetching side banners:", error);
//     throw error;
//   }
// };

// const getCourseById = async (courseId) => {
//   const query = gql`
//     query GetCourseById($slug: String!) {
//       courseList(where: { slug: $slug }) {
//         author
//         banner {
//           url
//         }
//         chapter {
//           ... on Chapter {
//             id
//             name
//             shortDesc
//             video {
//               url
//             }
//           }
//         }
//         demoUrl
//         description
//         free
//         id
//         name
//         slug
//         sourceCode
//         tag
//         twoChapters
//       }
//     }
//   `;

//   try {
//     const variables = { slug: courseId };
//     console.log("Requesting course with variables:", variables);
//     const result = await request(MASTER_URL, query, variables);
//     console.log("API Response:", result);

//     if (result.courseList) {
//       return result.courseList;
//     } else {
//       throw new Error("No course found with the provided ID");
//     }
//   } catch (error) {
//     console.error("Error fetching course by ID:", error);
//     throw error;
//   }
// };

// const enrollToCourse = async (courseId, email) => {
//   const query =
//     gql`
//   mutation MyMutation {
//     createUserEnrolledCourse(
//       data: {
//         courseId: "` +
//     courseId +
//     `"
//         userEmail: "` +
//     email +
//     `"
//         courseList: { connect: { slug: "" } }
//       }
//     ) {
//       id
//     }
//     publishManyUserEnrolledCoursesConnection {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `;
//   const result = await request(MASTER_URL, query);
//   return result;
// };
// const checkUserEnrolledToCourse = async (courseId, email) => {
//   const query =
//     gql`
//     query MyQuery {
//       userEnrolledCourses(
//         where: { courseId: "` +
//     courseId +
//     `", userEmail: "+ ` +
//     email +
//     `" }
//       ) {
//         id
//       }
// }
//  `;
//   // const variables = { courseId, email };
//   const result = await request(MASTER_URL, query, variables);
//   return result;
// };
// export default {
//   getAllCourseList,
//   getSideBanner,
//   getCourseById,
//   enrollToCourse,
//   checkUserEnrolledToCourse,
// };

import { request, gql } from "graphql-request";

const MASTER_URL = "https://management-us-west-2.hygraph.com/graphql";

const getAllCourseList = async () => {
  const query = gql`
    query GetAllCourses {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        author
        name
        id
        free
        description
        demoUrl
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
          }
        }
        twoChapters
        sourceCode
        tag
        slug
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result.courseLists;
  } catch (error) {
    console.error("Error fetching course list:", error);
    throw error;
  }
};

const getCourseById = async (courseId) => {
  const query = gql`
    query GetCourseById($slug: String!) {
      courseList(where: { slug: $slug }) {
        author
        banner {
          url
        }
        chapter {
          ... on Chapter {
            id
            name
            shortDesc
            video {
              url
            }
          }
        }
        demoUrl
        description
        free
        id
        name
        slug
        sourceCode
        tag
        twoChapters
      }
    }
  `;

  try {
    const variables = { slug: courseId };
    const result = await request(MASTER_URL, query, variables);
    if (result.courseList) {
      return result.courseList;
    } else {
      throw new Error("No course found with the provided ID");
    }
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
};

const enrollToCourse = async (courseId, email) => {
  const query = gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {
          courseId: "${courseId}"
          userEmail: "${email}"
        }
      ) {
        id
      }
    }
  `;
  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error enrolling in course:", error);
    throw error;
  }
};

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query = gql`
    query MyQuery {
      userEnrolledCourses(where: { courseId: "${courseId}", userEmail: "${email}" }) {
        id
      }
    }
  `;
  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error("Error checking user enrollment:", error);
    throw error;
  }
};

export default {
  getAllCourseList,
  getCourseById,
  enrollToCourse,
  checkUserEnrolledToCourse,
};
