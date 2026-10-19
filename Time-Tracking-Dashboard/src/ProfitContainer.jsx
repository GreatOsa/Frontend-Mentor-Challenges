import "./profileContainer.css";

export default function ProfitContainer({ activeTab, setActiveTab }) {
  //   const tabs = ["daily", "weekly", "monthly"];
  return (
    <div className="">
      <div className="profileCard">
        <div className="profileInfo">
          <div className="profileImg">
            <img
              src={`${import.meta.env.VITE_IMAGE_PATH}image-jeremy.png`}
              alt="profile image"
            />
          </div>
          <div className="profileText">
            <p className="smallText">Report for</p>
            <p class="split-name">
              <span class="first-name">Jeremy</span>
              <br />
              <span class="last-name">Robson</span>
            </p>
          </div>
        </div>

        <div className="tabs-container">
          {/* Tab buttons */}
          <div className="tabs">
            {["daily", "weekly", "monthly"].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";

// export default function Tabs() {

//   return (

//   );
// }
