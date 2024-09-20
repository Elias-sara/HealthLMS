// import { request, gql } from "graphql-request";

// const MASTER_URL =
//   "https://us-west-2.cdn.hygraph.com/content/cm14xd3nb01bs07w59azor7un/master";
// // const MASTER_URL = 'https://app-us-west-2.hygraph.com/a6ce27f07e5046ddb6e33001ad15cbf4/master'; // Uncomment if this is the correct URL

// // Query to fetch all course lists
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
//           chapter {
//           ... on Chapter{
//           id
//           name
//           video  {
//             url
//           }
//           }
// }
//         twoChapters
//         sourceCode
//         tag
//         slug
//       }
//     }
//   `;

//   try {
//     const result = await request(MASTER_URL, query);
//     return result.courseLists; // Ensure this matches the shape of the response from your GraphQL server
//   } catch (error) {
//     console.error("Error fetching course list:", error);
//     throw error;
//   }
// };

// // Query to fetch side banners
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
//     return result.sideBanners; // Ensure this matches the shape of the response from your GraphQL server
//   } catch (error) {
//     console.error("Error fetching side banners:", error);
//     throw error;
//   }
// };

// // Query to fetch a specific course by slug
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

//     if (result.courseList && result.courseList.length > 0) {
//       return result.courseList[0]; // Ensure this matches your data shape
//     } else {
//       throw new Error("No course found with the provided ID");
//     }
//   } catch (error) {
//     console.error("Error fetching course by ID:", error);
//     throw error;
//   }
// };

// export default {
//   getAllCourseList,
//   getSideBanner,
//    getCourseById,
// };
import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://us-west-2.cdn.hygraph.com/content/cm14xd3nb01bs07w59azor7un/master";

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
    return result.courseLists; // Ensure this matches the shape of the response from your GraphQL server
  } catch (error) {
    console.error("Error fetching course list:", error);
    throw error;
  }
};

const getSideBanner = async () => {
  const query = gql`
    query GetSideBanner {
      sideBanners {
        id
        name
        banner {
          id
          url
        }
        url
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result.sideBanners; // Ensure this matches the shape of the response from your GraphQL server
  } catch (error) {
    console.error("Error fetching side banners:", error);
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
    console.log("Requesting course with variables:", variables);
    const result = await request(MASTER_URL, query, variables);
    console.log("API Response:", result);

    if (result.courseList) {
      return result.courseList; // Return the single course object
    } else {
      throw new Error("No course found with the provided ID");
    }
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    throw error;
  }
};

export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
};
