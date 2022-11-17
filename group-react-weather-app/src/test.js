import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Seoul");
  
  useEffect(() => {
    setCity(data)
  }, [city])
  
  return (
    <>
      <button onClick={() => setCity("Incheon")}>인천</button>
      
      <WindStatus windStatus={city.windStatus} />
      <Humidity humidity={city.humidity} />
      <Map city={city} />
      <Chart city={city} />
    </>
  )
}

function WindStatus({windStatus}) {
  // windStatus
}

function Humidity({humidity}) {
  // humidity
}

function Map() {}

function Chart() {}


function add(x, y) {
  return x + y
}

add(1,2)  // 3

add(3,4) // 7