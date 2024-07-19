import React, { useState } from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const Task9 = () => {
  const [image, setImage] = useState(img1);
  return (
    <>
      <img src={image} alt={"image"} height={200} width={200} />
      <button
        onClick={() =>
          setImage((prevImage) => (prevImage === img1 ? img2 : img1))
        }
      >
        Change
      </button>
    </>
  );
};
export default Task9;
