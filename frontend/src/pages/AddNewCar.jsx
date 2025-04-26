import React from 'react';
import { useHistory } from 'react-router-dom';

function AddNewCar() {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here

    // Redirect after successful form submission
    history.push('/inventory');
  };

  return (
    <div>
      <h2>Add New Car</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form fields here */}
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default AddNewCar;
