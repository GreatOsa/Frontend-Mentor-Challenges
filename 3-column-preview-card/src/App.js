import "./App.css";
import Card from "./Card";
import sedans from "./images/icon-sedans.svg";
import suvs from "./images/icon-suvs.svg";
import luxury from "./images/icon-luxury.svg";

function App() {
  return (
    <div className="App">
      <div className="cardContainer">
        <Card
          icon={sedans}
          name="Sedans"
          info="Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip."
          pryColor="hsl(31, 77%, 52%)"
        />
        <Card
          icon={suvs}
          name="suvs"
          info="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures. "
          pryColor="hsl(184, 100%, 22%)"
        />
        <Card
          icon={luxury}
          name="Luxury"
          info="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style. "
          pryColor="hsl(179, 100%, 13%)"
        />
      </div>
    </div>
  );
}

export default App;
