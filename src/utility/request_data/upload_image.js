/**
 * @param {object} data
 * @returns {Promise<object>} image url and other response data
 */
const cloudinary_url = "https://api.cloudinary.com/v1_1/dpwtwnemi/image/upload";

const UPLOAD_IMAGE = async (data) => {
  try {
    const image_url = data.upload_image[0];
    const image_data = new FormData();

    image_data.append("file", image_url);
    image_data.append("upload_preset", "ezy_skills_preset_image_key");

    const res = await fetch(`${cloudinary_url}`, {
      method: "POST",
      body: image_data,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Image upload error:", error);
    throw error; // Re-throw the error for the calling code to handle if needed
  }
};

export default UPLOAD_IMAGE;