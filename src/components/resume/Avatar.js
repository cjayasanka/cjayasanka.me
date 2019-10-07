import React from "react";

import chathura from "../../media/chathura.jpg";

const Avatar = () => {
  return (
    <div>
      <img
        style={{
          maxWidth: "180px",
          height: "50%",
          width: "100%",
          objectFit: "contain",
          margin: "-100px auto 0",
          display: "inline-block"
        }}
        src={chathura}
        alt="avatar"
        class="ui medium circular image"
      />
    </div>
  );
};

export default Avatar;
