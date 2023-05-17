export const getDate = (date) => {
  const year = date
    .toLocaleString("ru", {
      year: "numeric",
      month: "long",
    })
    .replace("г.", "");
  let day = date.getDate().toString();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();
  if (day < 10) day = day.padStart(3, "0");
  if (hours < 10) hours = hours.padStart(3, "0");
  if (minutes < 10) minutes = minutes.padStart(3, "0");

  return { year, day, hours, minutes };
};
