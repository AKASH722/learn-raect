import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const images = [img1, img2];

function ImageEx() {
  return (
    <>
      {images.map((pic, index) => (
        <img
          src={pic}
          height="200px"
          width="200px"
          alt={pic.name}
          key={index}
        />
      ))}
    </>
  );
}

export default ImageEx;
