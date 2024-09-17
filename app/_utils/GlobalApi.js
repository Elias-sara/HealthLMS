import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://us-west-2.cdn.hygraph.com/content/cm14xd3nb01bs07w59azor7un/master";
// const MASTER_URL = 'https://app-us-west-2.hygraph.com/a6ce27f07e5046ddb6e33001ad15cbf4/master'; // Uncomment if this is the correct URL

// Query to fetch all course lists
const getAllCourseList = async () => {
  const query = gql`
    query GetAllCourses {
      courseLists(first: 20, orderBy: createdAt_DESC) {
        author
        name
        id
        free
        demoUrl
        description
        sourceCode
        banner {
          url
        }
        twoChapters
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

// Query to fetch side banners
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

// Query to fetch a specific course by slug
const getCourseById = async (courseId) => {
  const query = gql`
    query GetCourseById($slug: String!) {
      courseList(where: { slug: $slug }) {
        author
        youtubeUrl
        chapter {
          name
          youtubeUrl
          video {
            url
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
    return result.courseList[0]; // Assuming courseList returns an array, return the first item
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
