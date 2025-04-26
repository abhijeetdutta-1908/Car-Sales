import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // ✅ useHistory for v5
import axios from 'axios';

function Inventory() {
  const [cars, setCars] = useState([]);
  const history = useHistory(); // ✅ useHistory instead of useNavigate

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cars');
      setCars(response.data);
    } catch (error) {
      console.error('Failed to fetch cars:', error);
    }
  };

  const handleEdit = (id) => {
    history.push(`/edit-car/${id}`); // ✅ use history.push
  };

  return (
    <div>
      <h2>Inventory</h2>
      <Link to="/add-car">
        <button>Add New Car</button>
      </Link>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.make} {car.model} - ${car.price}
            <button onClick={() => handleEdit(car.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
