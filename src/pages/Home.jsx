import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import PricingTable from '../components/PricingTable';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceCards></ServiceCards>
            <PricingTable></PricingTable>
        </div>
    );
};

export default Home;