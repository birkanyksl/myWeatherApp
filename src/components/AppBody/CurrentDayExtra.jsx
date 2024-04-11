/* eslint-disable react/prop-types */
import CurrentDayExtraItem from "./CurrentDayExtraItem";
import "./CurrentDayExtra.css";

const CurrentDayExtra = ({ data }) => {
  return (
    <div className="current-extra-container">
      {<CurrentDayExtraItem data={data} />}
    </div>
  );
};

export default CurrentDayExtra;
