import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForm from './MyForm';
import NextPage from './NextPage';
import EndPage from './EndPage';

const App = () => {
  return (
    <Router basename="/website">
      <Routes>
        <Route path="/" element={<MyForm />} />
        <Route path="/inna-strona" element={<NextPage />} />
        <Route path="/end-page" element={<EndPage />} />
      </Routes>
    </Router>
  );
};

export default App;
