const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUm9iaW4iLCJlbWFpbCI6InJvYmluQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicm9iaW4xMjMiLCJpYXQiOjE3MTYzMDc2NDl9.Mzuw1FnbWdHF_miGMT6eAuV19dtQCmq_hmGDIwA164M`;

/**
 *
 * @param {URL} url
 * @returns Promise
 *
 */
const API_REQUEST_BY_URL = async (url) => {
  try {
    if (!token) {
      return { message: "Unauthorize token", status: 401 };
    }

    const request = await fetch(`${url}`, {
      next: { revalidate: 300 },
      headers: {
        Authorization: `${token}`,
      },
    });
    return request.json();

    // error handle
  } catch (error) {
    console.log(error);
  }
};

export default API_REQUEST_BY_URL;
