// 전역 변수 설정
let map;
let cities;
let cityCnt;

const weatherApi = "https://api.openweathermap.org/data/2.5/weather";
const params = {
  appid: "4eedfeb184dc7cb08af6c0bd529c48b9",
  units: "metric",
  lang: "kr",
};

// 함수
function mapInit() {
  var options = {
    center: new kakao.maps.LatLng(37.55587, 126.97302),
    level: 13,
    // draggable: false,
    // zoomable: false,
    disableDoubleclick: true,
  };

  map = new kakao.maps.Map($("#map")[0], options);
  axios.get("./json/city.json").then(onGetCity);
  // then 괄호 안에 나올 땐 함수에 () 안넣음]
  console.log(res.data.cities);
}

function onGetCity(r) {
  console.log(r.data);
  cities = r.data.cities;
  cities.forEach(function (item, idx) {
    // console.log(item.name);
    params.lat = item.lat;
    params.lon = item.lon;
    params.id = item.id;

    console.log(params);
    axios.get(weatherApi, { params }).then(onCreateMaker);
  });
}

mapInit();

function onCreateMaker(r) {
  console.log("정보" + r.data.id);
  cityCnt++;
  console.log(cityCnt);

  let content = `<div class="layer">
  <div><img src=""></div>
  ${r.data.name}</div>`;

  let position = new kakao.maps.LatLng(r.data.coord.lat, r.data.coord.lon);

  var customOverlay = new kakao.maps.CustomOverlay({
    position: position,
    content: content,
  });
}

// axios.get(url, {}).then(function (res) {});
// axios.get(weatherApi, params).then(function (res) {});

mapInit();
