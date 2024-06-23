/**
 *
 * @param {data} data
 * @param {id} id
 * @returns Promise
 */

const token = process.env.NEXT_PUBLIC_TOKEN;

const UPDATE_DATA_BY_ID = async (params_id, data) => {
  try {
    const updateUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/courses/myCourses/update-course/${params_id}`;

    const response = await fetch(updateUrl, {
      method: "PATCH",
      headers: {
        Authorization: token,
        "Content-type": "Application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.status === 200) {
      toast.error("Network response was not ok");
    }
    const update = await response.json();
    return update;
  } catch (error) {
    console.error("There was a problem with the fetch operation:");
  }
};

export default UPDATE_DATA_BY_ID;
