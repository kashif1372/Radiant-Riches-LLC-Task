import "./Banner.scss";
import content1 from "../../../assets/content1.png";
import banner from "../../../assets/banner1.png";
import star1 from "../../../assets/star.png";
import star2 from "../../../assets/startwo.png";
import advertise from "../../../assets/advertise.png";
import diamond from "../../../assets/diamond.png";
import circle from "../../../assets/circleright.png";

const Banner = () => {
  const cardData = [
    {
      id: 1,
      buttontext: "Best Choice",
      imagetext: "Builder 1",
      image: content1,
      title: "WixPro 72-Inch Responsive Website Builder",
      contentTitleOne:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      contentTitleTwo:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      point: 9.8,
      icon: star1,
      category: "Exceptional",
    },
    {
      id: 2,
      buttontext: "Best Value",
      imagetext: "Builder",
      image: diamond,
      title: "SiteCraft 68-Inch Ultimate Web Design Studio",
      contentTitleOne:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      contentTitleTwo:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      point: 9.5,
      icon: star2,
      category: "Excellent",
    },
    {
      id: 3,
      imagetext: "Builder 1",
      title: "WixPro 72-Inch Responsive Website Builder",
      contentTitleOne:
        "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      contentTitleTwo:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      point: 9.3,
      icon: star1,
      category: "Exceptional",
    },
    {
      id: 4,
      imagetext: "CDK",
      title: "CDK Resposive Builder:",
      contentTitleOne:
        "An extensive library of widgets and apps, and detailed step-by-step guides",
      point: 9.1,
      icon: star2,
      category: "Very Good",
      lovetext: "Why we love it",
      loveicon: circle,
      doc1: "Documentation",
      doc2: "Easy Use",
      doc3: "Out of box",
      point1: 9.9,
      point2: 8.9,
      pointtext1: "Building Responsive",
      pointtext2: "Cool",
      pointtext3: "Docs",
      offer: "26% Off",
    },
  ];

  return (
    <div className="banner">
      {cardData.map((card) => (
        <div key={card.id} className="banner-row">
          {card.buttontext && (
            <button className="content-btn">
              <img src={card.image} alt="" />
              <span className="content-text">{card.buttontext}</span>
            </button>
          )}

          <div className="content-no">{card.id}</div>
          <div className="first-row">
            <img src={banner} alt="" />
            <p className="banner-title">{card.imagetext}</p>
          </div>
          <div>
            <p className="banner-text">
              <span className="banner-text-bold">{card.title}</span>-{" "}
              {card.contentTitleOne}
            </p>
            {card.offer && <span className="offer">{card.offer}</span>}

            <span className="main-highlights">Main highlights</span>
            {card.point1 && (
              <div className="highlight-div">
                <div className="highlight-content high highest-top">
                  <span className="highlist-count">{card.point1}</span>
                  <span className="highlight-text">{card.pointtext1}</span>
                </div>
                <div className="highlight-content high">
                  <span className="highlist-count">{card.point2}</span>
                  <span className="highlight-text">{card.pointtext2}</span>
                </div>
                <div className="highlight-content highest-bottom">
                  <span className="highlist-count">{card.point2}</span>
                  <span className="highlight-text">{card.pointtext3}</span>
                </div>
              </div>
            )}

            <p className="receive-text">{card.contentTitleTwo}</p>
            <div>
              <p className="love">{card.lovetext}</p>
              {card.loveicon && (
                <div>
                  <div className="choose-div">
                    <img src={card.loveicon} alt="" />
                    <span className="choose-text">{card.doc1}</span>
                  </div>
                  <div className="choose-div">
                    <img src={card.loveicon} alt="" />
                    <span className="choose-text">{card.doc2}</span>
                  </div>
                  <div className="choose-div">
                    <img src={card.loveicon} alt="" />
                    <span className="choose-text">{card.doc3}</span>
                  </div>
                </div>
              )}
            </div>
            <select className="select-relevant">
              <option value="Show more">Show more</option>
            </select>
          </div>
          <div className="third-row">
            <img className="advertise-img" src={advertise} alt="" />
            <span>{card.point}</span>
            <p>{card.category}</p>
            <img src={card.icon} alt="" />
            <div className="view-div">
              <button className="view-btn">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
