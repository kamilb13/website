import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForm from './MyForm';
import NextPage from './NextPage';
import EndPage from './EndPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MyForm />} />
      <Route path="/inna-strona" element={<NextPage />} />
      <Route path="/end-page" element={<EndPage />} />
    </Routes>
  );
};

export default App;
