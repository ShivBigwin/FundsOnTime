"use client";
import Loader from '@/component/loader';
import Navbar from '@/component/Navbar';
import GrievanceRedressalPolicy from '@/component/policies/grievance/grievancepolicy';
import React, { Suspense, useEffect, useState } from 'react'

const GrievancePolicy = () => {

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
      {/* <Navbar> */}
        <Suspense fallback={<div>Loading...</div>}>
          <GrievanceRedressalPolicy />
        </Suspense>
      {/* </Navbar> */}
    </div>
  );
}

export default GrievancePolicy
