const getTime = () => {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();

  if (minute < 10) {
    minute = `0${minute}`;
  }
  let meridien = "";
  if (hour > 12) {
    hour = hour % 12;
    meridien = "PM";
  } else {
    meridien = "AM";
  }
  return `${hour}:${minute} ${meridien}`;
};

export const health = (req, res) => { 


  res.json({
    server_name: "Backend_Micro_Project",
    time:getTime(),
  });
};
