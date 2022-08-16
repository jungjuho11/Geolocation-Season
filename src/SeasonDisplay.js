import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
  summer: {
    text: "LET'S GET SOME ICE CREAM!",
    iconName: "sun",
  },
  winter: {
    text: "BRRR! IT'S COLD!",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter"; //if lat is > 0, then return 'summer'. otherwise return 'winter'
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  /* console.log(props.lat + " here is the prop"); */

  //season will either be summer or winter
  const season = getSeason(props.lat, new Date().getMonth());

  /* console.log(season); */

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}> {/* className will also either be winter or summer */}
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
