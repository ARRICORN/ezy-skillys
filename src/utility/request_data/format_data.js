const FORMAT_DATE = (time) => {
  const date = new Date(time);

  const formattedDate = `${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${date
    .getDate()
    .toString()
    .padStart(2, "0")}/${date.getFullYear()}`;

  return formattedDate.toString();
};

export default FORMAT_DATE;
