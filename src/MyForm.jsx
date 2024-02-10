import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
  const [formData, setFormData] = useState({
    date: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.date === '2023-07-11') {
      navigate('/inna-strona');
    } else {
      setErrorMessage('Zła data bejbe');
    }
  };

  return (
    <>
    <h1>Hej, jako potwierdzenie, że to ty </h1> <h1>wybierz dobrą datę ;)</h1>
    <div className="container my-5" style={{ backgroundColor: '#d1bcc9', padding: '20px', borderRadius: '10px' }}>
      <div className="mx-auto card p-3" style={{ maxWidth: '500px', margin: 'auto', background: 'white', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              Wybierz dobrą datę:
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
  
          <button type="submit" className="btn btn-primary" style={{ background: 'pink', borderColor: 'pink' }}>
            Prześlij
          </button>

          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    </div>
    </>
  );
};

export default MyForm;
