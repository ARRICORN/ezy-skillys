const { default: axios } = require("axios");

const get_all_courses = async () => {
  try {
    const result = await axios.get(`${process.env.BASE_URL}/api/courses`);
    return result.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default get_all_courses;
