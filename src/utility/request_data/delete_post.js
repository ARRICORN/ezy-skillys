/**
 *
 * @param {string} id
 * @param {string} token
 * @returns {Promise<Object>}
 */
const DELETE_POST_WITH_ID = async (id, token) => {
  try {
    // Delete url with id
    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses/delete-course/${id}`;

    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      // Instead of returning a response here, we throw an error
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return { success: true, data };

  } catch (error) {
    console.error("Error deleting post:", error);
    return {
      success: false,
      message: error.message || "An error occurred while deleting the post",
    };
  }
};

export default DELETE_POST_WITH_ID;