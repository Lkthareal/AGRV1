import React from 'react';
import Hero from './Hero';
import Specialties from './Specialties';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Specialties />
      <Footer />
    </>
  );
};

export default Home;