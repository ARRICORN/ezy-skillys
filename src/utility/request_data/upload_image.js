/**
 *
 * @param {object} data
 * @returns image url
 */


const cloudinary_url = "https://api.cloudinary.com/v1_1/dpwtwnemi/image/upload";

const UPLOAD_IMAGE = async (data) => {
  const image_url = data.upload_image[0];
  const image_data = new FormData();

  image_data.append("file", image_url);
  image_data.append("upload_preset", "ezy_skills_preset_image_key");

  const res = await fetch(`${cloudinary_url}`, {
    method: "POST",
    body: image_data,
  });

  return await res.json();
};

export default UPLOAD_IMAGE;
