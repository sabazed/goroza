import { useEffect, useState } from 'react';

import './App.css';
import Tour from './Components/Tour/Tour';
import Goroza from './Goroza/gori.json';

function App() {

  const [tours, setTours] = useState([]);
  const [title, setTitle] = useState("Our Tours");
  const [loading, setLoading] = useState(false);

  const removeTour = (id) => {
    if (tours.length == 1) {
      setTitle("No Tours Left");
    }
    setTours(tours.filter(tour => tour.id != id));
  }

  const getTour = (tour) => {
    const image = (tour.image.startsWith("./Goroza")) ? require("./Goroza/gori.jpg") : tour.image;
    return <Tour key={tour.id} tourId={tour.id} title={tour.name} price={tour.price} text={tour.info} imgSrc={image} removeTour={removeTour} />;
  }

  const loadTours = async () => {
    setLoading(true);
    const response = await fetch("https://course-api.com/react-tours-project");
    const data = await response.json();
    setTours([Goroza, ...data]);
    setTitle("Our Tours");
    setLoading(false);
  }

  useEffect(() => {
    loadTours();
  }, []);

  return (
    <>
      <div className='tours-header'>{title}</div>
      <div className='tours-header-border'/>
      {tours.length > 0 && tours.map(tour => getTour(tour))}
      {tours.length == 0 && !loading && <button className='refresh-button' onClick={loadTours}>Refresh</button>}
      {loading && <div className='loading-text'>Loading...</div>}
    </>
  );
}

export default App;
