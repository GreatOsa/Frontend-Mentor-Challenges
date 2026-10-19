import React from "react";
import "./cardContainer.css";

export default function CardContainer({ data, activeTab }) {
  // const { current, previous } = data.timeframes[timeframe];

  function toSlug(sentence) {
    return sentence.toLowerCase().replace(/\s+/g, "-");
  }
  const cardColor = {
    Work: "hsl(15, 100%, 70%)",
    Play: "hsl(195, 74%, 62%)",
    Study: "hsl(348, 100%, 68%)",
    Exercise: "hsl(145, 58%, 55%)",
    Social: "hsl(264, 64%, 52%)",
    "Self Care": "hsl(43, 84%, 65%)",
  };
  return (
    <div className="card-wrapper">
      {data.map((item, index) => (
        <div
          key={index}
          className="card-container"
          style={{ backgroundColor: cardColor[item.title] || "#333" }}
        >
          <div className="iconContainer">
            <img
              src={`${import.meta.env.VITE_IMAGE_PATH}icon-${toSlug(
                item.title
              )}.svg`}
              className="icon"
              alt=""
            />
          </div>

          <div className="card-content">
            <div className="content-info">
              <div className="content-info-heading">
                <p>{item.title}</p>
                <img
                  src={`${import.meta.env.VITE_IMAGE_PATH}icon-ellipsis.svg`}
                  alt="Menu icon"
                  className="ellipsis-icon"
                />
              </div>

              <div className="content-info-hrs">
                <p className="current-hrs">
                  {item.timeframes[activeTab].current}
                  {item.timeframes[activeTab].current <= 1 ? "hr" : "hrs"}
                </p>
                <p>
                  {" "}
                  {activeTab === "daily"
                    ? "Yesterday"
                    : activeTab === "weekly"
                    ? "Last Week"
                    : "Last Month"}{" "}
                  - {item.timeframes[activeTab].previous}hrs
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
