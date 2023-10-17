import React from "react";
import './Loading.css'
const Loading = () => {
  return (
    <div>
      <div id="preloader">
        <div id="status">&nbsp;</div>
      </div>

      <img width="100%" src="https://unsplash.it/3000/3000/?random" />
    </div>
  );
};

export default Loading;
