import { useEffect, useState } from 'react';

const Cars = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async() => {
      const { cars } = await fetch('/api/cars')
          .then(response => response.json());
      setCars(cars);
    }
    fetchCars();
  }, []);

  return(
    <div>
      <h2>The cars available for sale are:</h2>
      <ul>
        {cars.map(car => <li key={`${car.make}_${car.model}`}>{car.make} - {car.model}</li>)}
      </ul>
    </div>
  );
}

export default Cars;
