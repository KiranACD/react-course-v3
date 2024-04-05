import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    try {
      setIsLoading(true);
      const resp = await fetch(url);
      const newTours = await resp.json();
      setTours(newTours);
      console.log(newTours);
    } catch (error) {
      console.log(error);
    };
    setIsLoading(false);
  }

  useEffect(() => {   
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  };

  if (tours.length === 0) {
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button type='button' style={{marginTop:'2rem'}} className='btn' onClick={fetchTours}>Refresh Tours</button>
      </div>
    </main>
  }

  return (
    <>
    <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
    {/* {isLoading ? (
      <Loading />
    ):(
      <main>
        <Tours tours={tours} removeTour={removeTour}/>
      </main>
      // <div>{tours.map((tour) => {
      //   return <p key={tour.id}>{tour.name}</p> 
      // })}</div>
    )} */}
    </>
  );
    {/* {isLoading ? (
      <Loading />
    ):(
      {tours.map((tour) => {
        return <Tour />
      })}
    )} */}
};
export default App;
