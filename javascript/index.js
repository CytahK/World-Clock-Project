function updateTime() {
  let capeTownElement = document.querySelector("#capetown");
  if (capeTownElement) {
    let capeTownDateElement = capeTownElement.querySelector(".date");
    let capeTownTimeElement = capeTownElement.querySelector(".time");
    let capeTownTime = moment().tz("Africa/Johannesburg");

    capeTownDateElement.innerHTML = moment().format("MMMM Do YYYY");
    capeTownTimeElement.innerHTML = capeTownTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let abuDhabiElement = document.querySelector("#abudhabi");
  if (abuDhabiElement) {
    let abuDhabiDateElement = abuDhabiElement.querySelector(".date");
    let abuDhabiTimeElement = abuDhabiElement.querySelector(".time");
    let abuDhabiTime = moment().tz("Asia/Dubai");

    abuDhabiDateElement.innerHTML = moment().format("MMMM Do YYYY");
    abuDhabiTimeElement.innerHTML = abuDhabiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")}</small></div>
          </div>
          <a href="index.html">All Cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
