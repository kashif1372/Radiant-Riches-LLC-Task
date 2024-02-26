import clock from "../../../assets/clock.png";
import advertise from "../../../assets/advertise.png";
import vector from "../../../assets/vector.png";
import "./Home.scss";
import Banner from "../Banner/Banner";
import RelatedDeals from "../RelatedDeals/RelatedDeals";
import SignUp from "./SignUp/SignUp";

const Home = () => {
  return (
    <div className="home">
      <p className="heading">
        Best Website builders in the US
      </p>
      <div className="border"></div>
      <div className="clock-select">
        <div
          className="clock-div clock-div-sm"
        >
          <div className="clock-div-content">
            <img className="clock" src={clock} alt="" />
            <p className="content">Last Updated</p>
            <span className="content">-</span>
            <p className="content">February 22, 2020</p>
          </div>
          <div className="clock-div-content gap">
            <img className="clock" src={advertise} alt="" />
            <p className="content">Advertising Disclosure</p>
          </div>
        </div>
        <div
          className="select-div"
        >
          <select className="select-relevant">
            <option value="volvo">Top Relevant</option>
          </select>
        </div>
      </div>
      <div className="border"></div>
      <div className="tab">
        <button className="tab-btn tab-gap">Tools</button>
        <button className="tab-btn tab-gap">AWS Builder</button>
        <button className="tab-btn tab-gap">Start Build</button>
        <button className="tab-btn tab-gap">Build Supplies</button>
        <button className="tab-btn tab-gap">Tooling</button>
        <button className="tab-btn">BlueHosting</button>
      </div>
      <div
        className="tab-content"
      >
        <p className="vector-left">Home</p>
        <img className="vector-icon vector-right" src={vector} alt="" />
        <p className="vector-left">Hosting for all</p>
        <img className="vector-icon vector-right" src={vector} alt="" />
        <p className="vector-left">Hosting</p>
        <img className="vector-icon vector-right" src={vector} alt="" />
        <p className="vector-left">Hosting6</p>
        <img className="vector-icon vector-right" src={vector} alt="" />
        <p className="vector-left">Hosting5</p>
      </div>
      <Banner />
      <RelatedDeals />
      <SignUp />
    </div>
  );
};

export default Home;
