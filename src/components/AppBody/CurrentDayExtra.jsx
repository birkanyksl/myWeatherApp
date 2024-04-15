/* eslint-disable react/prop-types */
import CurrentDayExtraItem from "./CurrentDayExtraItem";
import "./CurrentDayExtra.css";

const CurrentDayExtra = () => {
  return (
    <div className="current-extra-container">{<CurrentDayExtraItem />}</div>
  );
};

export default CurrentDayExtra;
