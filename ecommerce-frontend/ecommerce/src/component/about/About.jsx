import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./About.css";


const About = () => {
    const { loading } = useSelector(
        (state) =><state className="profile"></state>
      );
  return (
    <>
    {loading ? <Loading /> : 
    <>
    <MetaData title="About" />
    <div>
    <Header />
    <div
      style={{
        width: "90%",
        margin: "0px auto",
      }}
    >
      <div className="about__page">
        
        <div className="row flex">
          <div className="col__2">
            <img src="https://thumbs.dreamstime.com/b/ladies-shoe-store-logos-situated-aqua-shopping-mall-algarve-picture-taken-th-october-34352982.jpg"alt="store" />
          </div>
          <div className="col__2">
            <div className="meta">
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  lineHeight: "1.2",
                  
                }}
              >
                Welcome to our shop
              </span>
              <p>
              Different producers use different size schemes. Sometimes the same shoe size equals a different actual foot measure. The role of the seller is to properly describe the sizes, compare them to the length of a foot in centimeters and inform how to estimate the accurate size. It will increase the level of trust of a customer and allow for conscious shopping. A "size chart" function comes in handy. Our graphic department, during the implementation process, can prepare the appropriate way to display tables and information how to measure a shoe. In addition, it is worth to commission the preparation of a print scheme in a PDF format. Due to it, a customer can easily determine one's size for a particular shoe brand.
              </p>
              
            </div>
          </div>
        </div>

        
        <div className="second">
          <div className="heading">
            <h2>What We Provide?</h2>
          </div>
          <div className="row flex">
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="style"/>
                </div>
              <span>Best Prices & Offers</span>
              <p>
                There are many variations of passages 
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"10px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg"alt="shoes" />
                </div>
              <span>Best  Quality</span>
              <p>
                We provide the best quality.
              </p>
              </div>
            </div>
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg"alt="delivery" />
                </div>
              <span>Fast Delivery System</span>
              <p>
                We help our customers receive their orders as fast as possible.
              </p>
              </div>
            </div>


            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" alt="return"/>
                </div>
              <span>Easy Returns Service</span>
              <p>
                100% money back guaranty
              </p>
              </div>
            </div>

            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg"alt="nest" />
                </div>
              <span>100% satisfication</span>
              <p>
                We provide the best quality
              </p>
              </div>
            </div>
            
            <div className="col__3">
                <div style={{
                    padding:"15px",
                    border:"1px solid rgb(0 0 0 / 14%)",
                    minHeight:"230px"
                }}>
                <div className="flex align__items__center justify__content__center image">
              <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg"alt="deal" />
                </div>
              <span>Great Daily Deal</span>
              <p>
                
              </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  
  </>
    }
    </>
  );
};

export default About;