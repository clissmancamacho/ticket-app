import ReactGA from "react-ga4";
import AppConstant from "config/app";

const { SECRET_GA } = AppConstant;

const track = (url) => {
  ReactGA.initialize(SECRET_GA);
  ReactGA.set({
    page: url,
  });
  ReactGA.send(url);
};

export default track;
