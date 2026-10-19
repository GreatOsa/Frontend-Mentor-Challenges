import { useState } from "react";

import "./App.css";
import CardContainer from "./CardContainer";
import ProfitContainer from "./ProfitContainer";

import data from "../data.json";

function App() {
  const [activeTab, setActiveTab] = useState("daily");
  return (
    <div className="app">
      <div className="container">
        <ProfitContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        <CardContainer data={data} activeTab={activeTab} />
      </div>
    </div>
  );
}

export default App;
