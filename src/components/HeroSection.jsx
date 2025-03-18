import React from 'react';
import bannerVideo from '../assets/banner-video.mp4'

const HeroSection = () => {
    return (
        <div className='relative w-full h-screen flex items-center justify-center text-white'>
            <video autoPlay loop muted className='absolute w-full h-full object-cover'>
                <source src={bannerVideo}></source>
            </video>

            <div className='relative p-10 text-center rounded-lg'>
                <h1 className='text-4xl font-bold'>Welcome to Our Service</h1>
                <p className='mt-2 text-lg'>Your success starts here!</p>
            </div>
            
        </div>
    );
};

export default HeroSection;
