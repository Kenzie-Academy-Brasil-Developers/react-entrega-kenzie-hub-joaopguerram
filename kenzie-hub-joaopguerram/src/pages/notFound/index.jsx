import imgNotFound from "../../imgs/404notFoundPage.jpg";
import { NotStyle } from "./style";

const NotFound = () => {
  return (
    <NotStyle>
      <img src={imgNotFound} alt="ERROR 404!"></img>
      <span></span>
    </NotStyle>
  );
};
export default NotFound;
