import React from "react";

import back from "../../media/back.jpg";

const Cover = () => {
  return (
    <div>
      <img
        style={{ height: "300px", width: "100%", objectFit: "cover" }}
        src={back}
        alt="cover image"
        class="ui img"
      />
    </div>
  );
};

export default Cover;
