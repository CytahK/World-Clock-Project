function updateTime() {
  let capeTownElement = document.querySelector("#capetown");
  let capeTownDateElement = capeTownElement.querySelector(".date");
  let capeTownTimeElement = capeTownElement.querySelector(".time");
  let capeTownTime = moment().tz("Africa/Johannesburg");

  capeTownDateElement.innerHTML = moment().format("MMMM Do YYYY");
  capeTownTimeElement.innerHTML = capeTownTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let abuDhabiElement = document.querySelector("#abudhabi");
  let abuDhabiDateElement = abuDhabiElement.querySelector(".date");
  let abuDhabiTimeElement = abuDhabiElement.querySelector(".time");
  let abuDhabiTime = moment().tz("Asia/Dubai");

  abuDhabiDateElement.innerHTML = moment().format("MMMM Do YYYY");
  abuDhabiTimeElement.innerHTML = abuDhabiTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
