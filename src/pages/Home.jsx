import React from 'react';
import HeroSection from '../components/HeroSection';
import ServiceCards from '../components/ServiceCards';
import PricingTable from '../components/PricingTable';
import UserSearch from '../components/UserSearch';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <ServiceCards></ServiceCards>
            <PricingTable></PricingTable>
            <UserSearch></UserSearch>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;