const { default: toast } = require("react-hot-toast");

// temporary token
const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9iaW4iLCJlbWFpbCI6InJvYmluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicm9iaW4xMjMiLCJpYXQiOjE3MTgyODE4NzJ9.klJAt8LUfuD1e5mh0bGJcmFsT3sBrPpxZs-0BKmfFWo`;

const DELETE_POST_WITH_ID = async (id) => {
  // Delete url with id
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!response.ok) {
    toast.error("User data can't be deleted");
    return;
  }

  return response;
};

export default DELETE_POST_WITH_ID