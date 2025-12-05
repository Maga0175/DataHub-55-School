import React from 'react';
import Hero from '../components/Hero/Hero';
import UniversitySection from '../components/UniversitySection/UniversitySection';
import CTA from '../components/CTA/CTA';
import Features from '../components/Features/Features';
import ContactForm from '../components/ContactForm/ContactForm';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <UniversitySection />
      <CTA />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;