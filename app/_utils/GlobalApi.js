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
    return result.courseLists;
  } catch (error) {
    console.error(
      "Error fetching course list:",
      error.response?.errors || error
    );
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
    return result.sideBanners;
  } catch (error) {
    console.error(
      "Error fetching side banners:",
      error.response?.errors || error
    );
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

  const variables = { slug: courseId }; // Ensure the variable is defined
  try {
    const result = await request(MASTER_URL, query, variables);
    return result.courseList; // Return the courseList directly
  } catch (error) {
    console.error(
      "Error fetching course by ID:",
      error.response?.errors || error
    );
    throw error;
  }
};

const enrollToCourse = async (courseId, email) => {
  const query = gql`
    mutation EnrollToCourse($courseId: String!, $userEmail: String!) {
      createUserEnrolledCourse(
        data: { courseId: $courseId, userEmail: $userEmail }
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection {
        edges {
          node {
            id
          }
        }
      }
    }
  `;

  const variables = { courseId, userEmail: email }; // Define the variables correctly
  try {
    const result = await request(MASTER_URL, query, variables);
    return result;
  } catch (error) {
    console.error(
      "Error enrolling in course:",
      error.response?.errors || error
    );
    throw error;
  }
};

const checkUserEnrolledToCourse = async (courseId, email) => {
  const query = gql`
    query CheckUserEnrollment($courseId: String!, $userEmail: String!) {
      userEnrolledCourses(
        where: { courseId: $courseId, userEmail: $userEmail }
      ) {
        id
      }
    }
  `;

  const variables = { courseId, userEmail: email }; // Define the variables correctly
  try {
    const result = await request(MASTER_URL, query, variables);
    return result;
  } catch (error) {
    console.error(
      "Error checking user enrollment:",
      error.response?.errors || error
    );
    throw error;
  }
};

export default {
  getAllCourseList,
  getSideBanner,
  getCourseById,
  enrollToCourse,
  checkUserEnrolledToCourse,
};
