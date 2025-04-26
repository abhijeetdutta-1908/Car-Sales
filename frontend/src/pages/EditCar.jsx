import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

function EditCar() {
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here (editing the car)

    // After successful update
    history.push('/inventory');
  };

  return (
    <div>
      <h2>Edit Car {id}</h2>
      <form onSubmit={handleSubmit}>
        {/* Your form fields for editing car details */}
        <button type="submit">Update Car</button>
      </form>
    </div>
  );
}

export default EditCar;
