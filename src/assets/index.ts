import ImageLogo from "./images/logo.jpeg";
import NoImage from "./images/no-image.png";
const assets = (name: string) => {
  switch (name) {
    case "logo":
      return ImageLogo;
    default:
      return NoImage;
  }
};
export default assets;
