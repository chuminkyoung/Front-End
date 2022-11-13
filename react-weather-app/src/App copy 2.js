import {useState, useEffect} from 'react';


function fetchData(location) {

  const promise = fetch(`https://api.openweathermap.org/data/2.5/forecast?${location}&appid=5c7a12498a887e710f277c8408dc5d33`)
  .then(res => {
    if (!res.ok) {
      throw res;
    }
    return res.json()
  })

  return promise;
}

function App() {

  const [data, setData] = useState(null)
  const [location, setLocation] = useState("lat=44.34&lon=10.99");
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    fetchData(location)
    .then(data => {
      setData(data)
      console.log(data)
    })
    .catch(error => {
      console.error(error)
    })
    .finally(() => setIsLoaded(true))
  }, [location])

  if (!isLoaded) {
    return <p>fetching data...</p>
  }

  return (
    <>
      <h1>App</h1>
      <button onClick={() => setLocation("lat=37&lon=126")}>서울</button>
      <button onClick={() => setLocation("")}>도쿄</button>
      <button onClick={() => setLocation("")}>런던</button>

      도시: {data.city.name}
      나라: {data.city.country}
      인구: {data.city.population}

    </>
  )
}
export default App;