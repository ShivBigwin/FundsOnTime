"use client";
import Loader from '@/component/loader';
import Navbar from '@/component/Navbar';
import FairPracticePolicy from '@/component/policies/fair/fairpolicy';
import Interest_Rate_Policy from '@/component/policies/interestRate';

import React, { Suspense, useEffect, useState } from 'react'

const FairPolicy = () => {

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
                <Interest_Rate_Policy />
            </Suspense>

        </div>
    );
}

export default FairPolicy
