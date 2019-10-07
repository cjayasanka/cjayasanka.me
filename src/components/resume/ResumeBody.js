import React from "react";
import back from "../../media/back.jpg";
import chathura from "../../media/chathura.jpg";

const ResumeBody = () => {
  return (
    <div>
      <div>
        <img
          style={{ height: "50%", width: "100%", objectFit: "contain" }}
          src={back}
          alt="cover image"
          class="ui img"
        />
      </div>
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
    </div>
  );
};

export default ResumeBody;
