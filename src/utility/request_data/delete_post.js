// temporary token
/**
 *
 * @param {id} id
 * @param {token} token
 * @returns promise
 */
const DELETE_POST_WITH_ID = async (id, token) => {
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
    return response.status(400).json({
      message: "Server error occurred",
    });
  }

  const res = await response;
  return res;
};

export default DELETE_POST_WITH_ID;
