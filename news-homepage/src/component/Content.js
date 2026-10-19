import imageweb3mobile from "../images/image-web-3-mobile.jpg";
import imageweb3desktop from "../images/image-web-3-desktop.jpg";
import ButtonUI from "./buttun/button";
import image1 from "../images/image-retro-pcs.jpg";
import image2 from "../images/image-top-laptops.jpg";
import image3 from "../images/image-gaming-growth.jpg";

import "./../App.css";
function Content() {
  return (
    <div className="content ">
      <div className="viewHeight">
        <div className="introduction">
          <div className="imageWeb3">
            <img
              src={imageweb3mobile}
              className="imageweb3mobile"
              alt="image-web-3-mobile"
            />
            <img
              src={imageweb3desktop}
              className="imageweb3desktop"
              alt="image-web-3-desktop"
            />
          </div>
          <div className="details">
            <div className="column">
              <h1 className="title">The Bright Future of Web 3.0?</h1>
            </div>
            <div className="textSection column">
              <p>
                {" "}
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <ButtonUI name="READ MORE" />
            </div>
          </div>
        </div>
        <div className="news">
          <div className="newsContainer">
            <h1>New</h1>
            <div className="blog">
              <h2>Hydrogen VS Electric Cars</h2>
              <p>Will hydrogen-fueled cars ever catch up to EVs? </p>
            </div>
            <div className="lineDivider"></div>
            <div className="blog">
              <h2>The Downsides of AI Artistry </h2>
              <p>
                What are the possible adverse effects of on-demand AI image
                generation?{" "}
              </p>
            </div>
            <div className="lineDivider"></div>
            <div className="blog">
              <h2>Is VC Funding Drying Up?</h2>
              <p>
                Private funding by VC firms is down 50% YOY. We take a look at
                what that means.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="topRating">
        <div className="blog2">
          <img src={image1} alt="pcimag"></img>
          <div className="info">
            <h1>01</h1>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="blog2">
          <img src={image2} alt="pcimag"></img>
          <div className="info">
            <h1>02</h1>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="blog2">
          <img src={image3} alt="pcimag"></img>
          <div className="info">
            <h1>03</h1>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default Content;
