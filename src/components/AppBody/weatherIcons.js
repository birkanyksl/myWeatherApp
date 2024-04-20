const getWeatherIcon = (condition) => {
  let iconPath;
  switch (condition) {
    // Thunderstorm
    case "200":
    case "201":
    case "202":
    case "210":
    case "211":
    case "212":
    case "221":
    case "230":
    case "231":
    case "232":
      iconPath = "thunderstorm.png";
      break;

    // Drizzle
    case "300":
    case "301":
    case "302":
    case "310":
    case "311":
    case "312":
    case "313":
    case "314":
    case "321":
      iconPath = "shower-rain.png";
      break;

    // Rain
    case "500":
    case "501":
    case "502":
    case "503":
    case "504":
    case "511":
    case "520":
    case "521":
    case "522":
    case "531":
      iconPath = "rainn.png";
      break;

    // Snow
    case "600":
    case "601":
    case "602":
    case "611":
    case "612":
    case "613":
    case "615":
    case "616":
    case "620":
    case "621":
    case "622":
      iconPath = "snowy.png";
      break;

    // Atmosphere
    case "701":
    case "711":
    case "721":
    case "731":
    case "741":
    case "751":
    case "761":
    case "762":
    case "771":
    case "781":
      iconPath = "mist.png";
      break;

    // Clear sky
    case "800":
      iconPath = "clear-sky.png";
      break;

    // Few clouds
    case "801":
      iconPath = "few-clouds.png";
      break;

    // Scattered clouds
    case "802":
      iconPath = "scattered-clouds.png";
      break;

    // Broken clouds
    case "803":
    case "804":
      iconPath = "broken-clouds.png";
      break;

    // Shower rain
    case "09":
      iconPath = "shower-rain.png";
      break;

    // Rain
    case "10":
      iconPath = "rainn.png";
      break;

    // Thunderstorm
    case "11":
      iconPath = "/thunderstorm.png";
      break;

    // Snow
    case "13":
      iconPath = "now.png";
      break;

    // Mist
    case "50":
      iconPath = "mist.png";
      break;

    default:
      iconPath = "default.png";
      break;
  }
  return iconPath;
};

export default getWeatherIcon;
