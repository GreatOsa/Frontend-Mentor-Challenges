import React, { useState } from "react";
import drawer from "./images/drawers.jpg";
import avatar from "./images/avatar-michelle.jpg";

import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import "./App.css";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  function handleToggleActive() {
    setIsActive(!isActive);
  }

  return (
    <div className="App">
      <div className="card">
        <img
          className="blogPicture"
          src={drawer}
          alt="Three vertically stacked drawers labeled in bold, centered text: 'love,' 'lengus' (a distinctive term), and 'alive' from top to bottom."
        />
        <div>
          <article>
            <h1>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home{" "}
            </h1>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.{" "}
            </p>
          </article>
          <div className="authorInfo">
            <div className="author">
              <div className="authorDetail">
                <img src={avatar} className="avatar" alt="avatar" />
                <div className="nameAndDate">
                  <p className="name">mishelle appleton</p>
                  {/* <p className="date"> 28 Jun 2020 </p> */}
                  <time dateTime="2020-06-28">28 Jun 2020</time>
                </div>
              </div>
              <button
                className={`share-button`}
                onClick={handleToggleActive}
                aria-label="Share article"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill={
                      isActive
                        ? "var( --Very-Dark-Grayish-Blue)"
                        : "var(  --Light-Grayish-Blue)"
                    }
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </button>
            </div>

            <div className="shareContainer active">
              <div className="socialMedia">
                <p className="shareText">share</p>
                <img className="icon" src={facebook} alt="facebook" />
                <img className="icon" src={twitter} alt="twitter" />
                <img className="icon" src={pinterest} alt="pinterest" />
              </div>
              <button
                className={`share-button
                
                   `}
                onClick={handleToggleActive}
                aria-label="Share article"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                  <path
                    fill={
                      isActive
                        ? "var( --Very-Dark-Grayish-Blue)"
                        : "var(  --Light-Grayish-Blue)"
                    }
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </button>
            </div>

            {isActive && (
              <div className="share-panel">
                <span>SHARE</span>
                <div className="social-icons">
                  <a href="./">
                    <img src={facebook} alt="Facebook" />
                  </a>
                  <a href="./">
                    <img src={twitter} alt="Twitter" />
                  </a>
                  <a href="./">
                    <img src={pinterest} alt="Pinterest" />
                  </a>
                </div>
                <div className="triangle"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
