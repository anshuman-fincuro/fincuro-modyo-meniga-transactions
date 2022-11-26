import React from "react";
import { SpinningCircles } from "react-loading-icons";
import { useSelector } from "react-redux";

const Spinner = () => {
  const { loading } = useSelector((store) => store.componentReducer);

  if (!loading) return null;
  return (
    <div className="spinner">
      <div className="spinning-icon">
        <SpinningCircles
          fill="#06bcee"
          stroke="#06bcee"
          strokeOpacity={1}
          speed={1}
          fillOpacity={1}
          strokeWidth={3}
          height="10em"
        />
      </div>
    </div>
  );
};
export default Spinner;
