import "./FeaturedProduct.css";
import boolimg from "./imgs/bool.png";
import boolimg2 from "./imgs/bool2.png";
import boolimg3 from "./imgs/bool3.png";
import pimg1 from "./imgs/pimage1.png";
import pimg2 from "./imgs/pimage2.png";
import pimg3 from "./imgs/pimage3.png";
import pimg4 from "./imgs/pimage4.png";
import circle from "./imgs/circle.svg";
import mcircle from "./imgs/mcircle.svg";
const FeaturedProjects = () => {
  return (
    <div className="featuredprojects">
      <h2>Featured products</h2>
      <div className="card">
        <hr />
        <div className="fimgtext">
          <div className="fimg">
            <img src={boolimg} alt="" />
            <h1 className="mh1">Boolean Egyptian</h1>
            <img src={mcircle} alt="" id="mcircle" />
          </div>
          <div className="ftext">
            <h1>The Boolean Egyptian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="creators">
              <div className="pimages">
                <img src={pimg1} alt="" id="st" />
                <img src={pimg2} alt="" id="st2" />
                <img src={pimg3} alt="" id="st3" />
                <img src={pimg4} alt="" id="st4" />
              </div>
              <p>64 major creators</p>
              <img src={circle} alt="" id="circle" />
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <hr />
        <div className="fimgtext" id="rev">
          <div className="ftext">
            <h1>The Boolean Egyptian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="creators">
              <div className="pimages">
                <img src={pimg1} alt="" id="st" />
                <img src={pimg2} alt="" id="st2" />
                <img src={pimg3} alt="" id="st3" />
                <img src={pimg4} alt="" id="st4" />
              </div>
              <p>64 major creators</p>
              <img src={circle} alt="" id="circle" />
            </div>
          </div>
          <div className="fimg">
            <img src={boolimg2} alt="" />
            <h1 className="mh1">Boolean Egyptian</h1>
            <img src={mcircle} alt="" id="mcircle" />
          </div>
        </div>
      </div>
      <div className="card">
        <hr />
        <div className="fimgtext">
          <div className="fimg">
            <img src={boolimg3} alt="" />
            <h1 className="mh1">Boolean Egyptian</h1>
            <img src={mcircle} alt="" id="mcircle" />
          </div>
          <div className="ftext">
            <h1>The Boolean Egyptian</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor pur
            </p>
            <div className="creators">
              <div className="pimages">
                <img src={pimg1} alt="" id="st" />
                <img src={pimg2} alt="" id="st2" />
                <img src={pimg3} alt="" id="st3" />
                <img src={pimg4} alt="" id="st4" />
              </div>
              <p>64 major creators</p>
              <img src={circle} alt="" id="circle" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
