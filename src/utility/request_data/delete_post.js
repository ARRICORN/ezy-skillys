const { default: toast } = require("react-hot-toast");

// temporary token
const token = process.env.NEXT_PUBLIC_TOKEN;
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

  const res = await response.json();
  return res;
};

export default DELETE_POST_WITH_ID;
