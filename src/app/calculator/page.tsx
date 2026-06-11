"use client";
import About from '@/component/aboutUs';
import LoanCalculator from '@/component/calculator/Calculator';
import LayoutWrapper from '@/component/layoutwrapper/LayoutWrapper';
import Loader from '@/component/loader';
import Navbar from '@/component/Navbar';
import React, { Suspense, useEffect, useState } from 'react'

const AboutUs = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000);
        return () => clearTimeout(timer); // cleanup
    }, []); // run only once when mounted

    if (isLoading) {
        return <Loader />;
    }
    return (
        <div>

            <Suspense fallback={<div>Loading...</div>}>

                < LoanCalculator />

            </Suspense>

        </div>
    );
}

export default AboutUs
