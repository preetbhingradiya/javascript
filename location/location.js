// navigator.geolocation.getCurrentPosition((position)=>{

//     let a=position.coords.latitude
//     let b=position.coords.longitude

//     console.log(a,b);
// })

const ui = () => {
  let temp = `    <div class="container">
    <div class="app">
      <div class="header">
        <img src="https://s5.postimg.org/7l2xf9mjr/mumbai.jpg" alt="" />
        <span class="city">
          Mumbai, India
          <i class="fa fa-map-marker"></i>
          <span class="today">Today</span>
        </span>
        <span class="weather">
          <span class="temp">
            22<sup>&deg;</sup>
            <span class="unit">c</span>
          </span>
          <span class="wind-scale">
            <table>
              <tr>
                <td>Wind Direction</td>
                <td>
                  <i class="wi wi-wind towards-45-deg"></i>
                </td>
              </tr>
              <tr>
                <td>Wind Scale</td>
                <td>
                  <i class="wi wi-wind-beaufort-7"></i>
                </td>
              </tr>
            </table>
          </span>
          <i class="wi wi-night-sleet"></i>
          <span class="time">
            <i class="wi wi-time-3"></i>
          </span>
          <span class="day">Monday</span>
        </span>
      </div>
    </div>
  </div>`

    document.getElementById("ui-maker").innerHTML=temp

};
ui()

const weather = (data) => {
  console.log(data);
  console.log(data.name);
  console.log(data.main.temp);
  console.log(data.wind.speed);
};

document.getElementById("city").addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let cityname = document.getElementById("city").value;
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=3111087968a9f5b11193290c0bf19fd5&units=metric`
    )
      .then((ele) => ele.json())
      .then((response) => weather(response));
    // .then((response)=>console.log(response.name,response.coord.lon,response.coord.lat))
  }
});
